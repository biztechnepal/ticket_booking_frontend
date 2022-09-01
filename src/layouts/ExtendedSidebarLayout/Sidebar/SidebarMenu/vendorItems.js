import { IoBusSharp } from 'react-icons/io5';
import { hasRole } from './hasRole';

const vendorItems = {
  name: 'Bus',
  icon: IoBusSharp,
  items: []
};

if (hasRole(['vendor'])) {
  vendorItems.items.push(
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
  );
}

export default vendorItems;
