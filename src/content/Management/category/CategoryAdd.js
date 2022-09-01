import React, { useEffect, useState } from 'react';
import { Box, styled, Checkbox, Avatar, CardHeader, Card, Grid, List, Typography, Divider } from '@mui/material';
import { Form, Formik } from 'formik';
import { Alert, Badge, Button, ListGroup, Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { FaCheck, FaCloudDownloadAlt, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import FormikControl from 'src/formik/control/FormikControl';
import { fetchCategories } from 'src/slices/category';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import Toast from 'src/_partials/toast';
import Spinner from '../../../_partials/Spinner';
import { jsonStringify, jsonToFormData } from 'src/utils/form-data';
import { _categoryFormValidation } from 'src/formik/formValidation';

const AvatarWrapper = styled(Avatar)(

  ({ theme }) => `
    background: transparent;
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const BoxUploadWrapper = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(2)};
    background: ${theme.colors.alpha.black[5]};
    border: 1px dashed ${theme.colors.alpha.black[30]};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.create(['border', 'background'])};

    &:hover {
      background: ${theme.colors.alpha.white[50]};
      border-color: ${theme.colors.primary.main};
    }
`
);
export default function CategoryAdd() {
  const dispatch = useDispatch();
  const [isSubCategorySection, setIsSubCategorySection] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const { categories, subCategories } = useSelector(state => state.category);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/png'
  });
  const files = acceptedFiles.map((file, index) => (
    <ListGroup key={index}>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <img src={URL.createObjectURL(file)} width={150} height={150} />
        <div className="me-auto">
          <div className="fw-bold">{file.name}</div>
        </div>
        <Badge style={{ fontSize: "14px" }}  >
          {file.size}
        </Badge>
        <Divider />
      </ListGroup.Item>
    </ListGroup>
  ));
  const categoryInitialValues = {
    name: '',
    description: ''
  }
  const subCategoryInitialValues = {
    name: '',
    description: ''
  }

  const handleSubmit_Category = (values, helpers) => {
    try {
      helpers.setSubmitting(true);
      const json = {
        name: values.name,
        description: values.description,
        images: acceptedFiles,
      }
      let dataForm = jsonToFormData(json);
      axiosClient
        .post(urls.API_CATEGORY, dataForm)
        .then(result => {
          if (result.status === 200) {
            helpers.setSubmitting(false);
            helpers.resetForm();
            dispatch(fetchCategories());
            Toast.success("Category Added. Now you can add sub category.")
          } else {
            helpers.setSubmitting(false);
            Toast.warn("Category already added.")
          }
        })
        .catch((err) => {
          helpers.setSubmitting(false);
          Toast.error("Category cannot be added. ")
        })
    } catch (err) {
      helpers.setSubmitting(false);
      Toast.error("Something went wrong");
    }
  }
  const handleSubmit_SubCategory = (values, helpers) => {
    try {
      helpers.setSubmitting(true);
      // const json = {
      //   name: values.name,
      //   description: values.description,
      //   categoryId: selectedCategoryId
      // }
      var data = jsonStringify({
        name: values.name,
        description: values.description,
        categoryId: selectedCategoryId

      });
      // let dataForm = jsonToFormData(json);
      axiosClient
        .post(urls.API_SUB_CATEGORY, data)
        .then(result => {
          helpers.setSubmitting(false);
          if (result.status === 200) {
            helpers.resetForm()
            Toast.success("Sub Category Added.")
          } else {
            helpers.setSubmitting(false);
            Toast.warn("Sub-Category already added.")
          }
        })
        .catch((err) => {
          helpers.setSubmitting(false);
          Toast.error("Sub Category Failed to add.")
        })
    } catch (err) {
      helpers.setSubmitting(false);
      Toast.error("Something went wrong");
    }
  }
  return (
    <Card sx={{ p: 5 }}>
      <Stack>
        <h5> Category Section </h5>
        <Formik initialValues={categoryInitialValues} onSubmit={handleSubmit_Category} validationSchema={_categoryFormValidation} >
          {
            ({ isSubmitting, isValidating }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Name'
                      name='name'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Description'
                      name='description'
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box pb={2}>
                    <CardHeader title={'Category Images'} />
                    <BoxUploadWrapper {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragAccept && (<>
                        <AvatarWrapper variant="success">
                          <FaCheck size={25} />
                        </AvatarWrapper>
                        <Typography
                          sx={{
                            mt: 2
                          }}
                        >
                          {'Drop the file to start uploading'}
                        </Typography>
                      </>
                      )}
                      {isDragReject && (<>
                        <AvatarWrapper variant="rounded">
                          <FaWindowClose color='red' size={25} />
                        </AvatarWrapper>
                        <Typography
                          sx={{
                            mt: 2
                          }}
                        >
                          {'You cannot upload these file types'}
                        </Typography>
                      </>
                      )}
                      {!isDragActive && (<>
                        <AvatarWrapper variant="rounded">
                          <FaCloudDownloadAlt size={25} />
                        </AvatarWrapper>
                        <Typography
                          sx={{
                            mt: 2
                          }}
                        >
                          {'Drag & drop files here. Only 1 file'}
                        </Typography>
                      </>
                      )}
                    </BoxUploadWrapper>
                  </Box>
                  {files.length > 0 && (
                    <>
                      <Divider />
                      <Box >
                        <Alert
                          sx={{
                            py: 0
                          }}
                          variant="success"
                        >
                          {'You have uploaded'} <b>{files.length}</b> {'files'}!
                        </Alert>
                        <List
                          disablePadding
                          sx={{
                            mt: 2
                          }}
                          component="div"
                        >
                          {files}
                        </List>
                      </Box>
                    </>
                  )}
                </Grid>
                <Stack direction="horizontal" className="col-md-5 pt-2" gap={300}>
                  <Button
                    islo
                    className='customBtn'
                    type="submit">
                    <Spinner isLoading={isSubmitting} type={"light"} />
                    Add Category
                  </Button>
                </Stack>
              </Form>
            )}
        </Formik>
      </Stack>
      <br />
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={(e) => e.target.checked ? setIsSubCategorySection(true) : setIsSubCategorySection(false)}
          id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault">Create sub-category</label>
      </div>
      {
        isSubCategorySection && <Stack>
          <h5> Sub Category Section </h5>
          <Formik initialValues={subCategoryInitialValues} onSubmit={handleSubmit_SubCategory} validationSchema={_categoryFormValidation}  >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Name'
                      name='name'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Description'
                      name='description'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikControl
                      control='select'
                      select
                      label="Select category"
                      defaultSelect="Choose category"
                      options={categories}
                      onChange={(e) => setSelectedCategoryId(e.target.value)}
                      name="category"
                    />
                  </Grid>
                </Grid>

                <Stack direction="horizontal" className="col-md-5 pt-2" gap={300}>
                  <Button
                    className='customBtn'
                    type="submit">
                    <Spinner isLoading={isSubmitting} type={"light"} />
                    Add Sub-Category
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      }
    </Card>
  );
}
