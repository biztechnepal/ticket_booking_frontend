import { MdBusAlert, MdSpaceDashboard } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';

import { FaUserAlt } from 'react-icons/fa';

import { IoBusSharp } from 'react-icons/io5';

import { AiOutlineUser } from 'react-icons/ai';
import { hasRole } from './hasRole';
import vendorItems from './vendorItems';
import adminItems from './adminItems';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Dashboards',
        icon: MdSpaceDashboard,
        link: '/dashboards',
        items: [
          {
            name: 'Reports',
            link: '/dashboards/reports'
          }
          // {
          //   name: 'Analytics',
          //   link: '/dashboards/products',
          // }
        ]
      },
      {
        name: 'Profile',
        icon: FaUserAlt,
        link: '/dashboards'
      }
    ]
  },
  {
    heading: 'Management',
    items: []
  }
];

if (hasRole(['admin'])) {
  menuItems[1].items.push(
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
    }
  );
}

if (hasRole(['vendor'])) {
  menuItems[1].items.push(
    {
      name: 'Bus',
      icon: IoBusSharp,
      items: [
        {
          name: 'Create bus',
          link: '/vendor/bus/create',
          badgeTooltip: 'Updated'
        },

        {
          name: 'My buses',
          link: '/vendor/bus',
          badgeTooltip: 'Updated'
        }
      ]
    },
    {
      name: 'Bus schedules',
      icon: MdBusAlert,
      items: [
        {
          name: 'Create bus schedule',
          link: '/vendor/bus-schedule/create',
          badgeTooltip: 'Updated'
        },

        {
          name: 'List bus schedules',
          link: '/vendor/bus-schedule',
          badgeTooltip: 'Updated'
        }
      ]
    }
  );
}

export default menuItems;
