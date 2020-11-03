import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg';
import { ReactComponent as FlightIcon } from '../../assets/icons/flight.svg';
import { ReactComponent as ManpowerIcon } from '../../assets/icons/manpower.svg';
import { ReactComponent as GSEIcon } from '../../assets/icons/gse-projection.svg';

export const planningHeader = [
  {
    text: 'Flight Schedule',
    url: '/planning/flight-schedule',
    icon: FlightIcon,
  },
  {
    text: 'Manpower Projection',
    url: '/planning/manpower-projection',
    icon: ManpowerIcon,
  },
  { text: 'GSE Projection', url: '/planning/gse-projection', icon: GSEIcon },
  { text: 'Job Queue', url: '/planning/job-queue', icon: RefreshIcon },
];
export const rosteringHeader = [
  { text: 'Staff List', url: '/rostering/staff-list', icon: UserIcon },
  {
    text: 'Roster Planning',
    url: '/rostering/roster-landing',
    icon: CalendarIcon,
  },
  { text: 'Job Queue', url: '/rostering/job-queue', icon: RefreshIcon },
];

export const planningSubMenuItems = [
  { text: 'Flight', path: '/planning/settings/flight' },
  { text: 'separator' },
  { text: 'Client', path: '/planning/settings/client' },
  { text: 'separator' },
  { text: 'Manpower', path: '/planning/settings/manpower' },
  { text: 'separator' },
  { text: 'GSE', path: '/planning/settings/gse' },
  { text: 'separator' },
  { text: 'Shift', path: '/planning/settings/shift' },
  { text: 'separator' },
  { text: 'Location', path: '/planning/settings/location' },
  { text: 'separator' },
  { text: 'User', path: '/planning/settings/user' },
];

export const rosteringSubMenuItems = [
  { text: 'Flight', path: '/rostering/settings/flight' },
  { text: 'separator' },
  { text: 'Client', path: '/rostering/settings/client' },
  { text: 'separator' },
  { text: 'Manpower', path: '/rostering/settings/manpower' },
  { text: 'separator' },
  { text: 'Shift', path: '/rostering/settings/shift' },
  { text: 'separator' },
  { text: 'Location', path: '/rostering/settings/location' },
  { text: 'separator' },
  { text: 'User', path: '/rostering/settings/user' },
];
