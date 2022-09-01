import { IoBusSharp } from 'react-icons/io5';

import { AiOutlineUser } from 'react-icons/ai';

import { HiUsers } from 'react-icons/hi';

import { hasRole } from './hasRole';

const adminItems = {
  name: 'Admin',
  icon: HiUsers,
  items: []
};

if (hasRole(['admin'])) {
  adminItems.items.push(
    {
      name: 'Vendors',
      icon: HiUsers,
      items: [
        {
          name: 'Add a vendor',
          link: '/management/users/create'
        },
        {
          name: 'View vendors',
          link: '/management/users'
        }
      ]
    },
    {
      name: 'Vendors',
      icon: HiUsers,
      items: [
        {
          name: 'Create a vendor',
          link: '/management/commerce/products/create'
        },
        {
          name: 'List vendors',
          link: '/management/commerce/products',
          badgeTooltip: 'Updated'
        }
      ]
    },
    {
      name: 'Customers',
      icon: AiOutlineUser,
      items: [
        {
          name: 'List customers',
          link: '/management/customers',
          badgeTooltip: 'Updated'
        }
      ]
    },
    {
      name: 'Bus',
      icon: IoBusSharp,
      items: [
        {
          name: 'Create bus',
          link: '/management/bus/create',
          badgeTooltip: 'Updated'
        },

        {
          name: 'List buses',
          link: '/management/bus',
          badgeTooltip: 'Updated'
        }
      ]
    }
  );
}

export default adminItems;
