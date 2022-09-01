export const jsonToFormData = (json) => {
    var formData = new FormData();
    for (var key in json) {
    
        if (Array.isArray(json[key])) {
            json[key].map(function (value, index) {
                formData.append(key, value)
            })
        } else {
            formData.append(key, json[key])
        }
    }
    return formData;
}
export const jsonStringify = (json) => {
    return JSON.stringify(json);;
}