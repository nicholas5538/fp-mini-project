import { ReactComponent as Dashboard } from '../assets/dashboard.svg';
import { ReactComponent as Company } from '../assets/company.svg';
import { ReactComponent as Project } from '../assets/project.svg';
import { ReactComponent as Settings } from '../assets/settings.svg';
import { ReactComponent as Department } from '../assets/department.svg';
import { ReactComponent as Employee } from '../assets/employee.svg';
import { ReactComponent as Location } from '../assets/location.svg';

type listElements = {
    svgElement: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    text: string;
    path: string;
};

export const sidebarObj: listElements[] = [
    {
        svgElement: Dashboard,
        text: 'Dashboard',
        path: '/',
    },
    {
        svgElement: Company,
        text: 'Company',
        path: '',
    },
    {
        svgElement: Project,
        text: 'Projects',
        path: 'projects',
    },
    {
        svgElement: Settings,
        text: 'Settings',
        path: 'settings',
    },
];

export const dropdownObj: listElements[] = [
    {
        svgElement: Department,
        text: 'Departments',
        path: 'departments',
    },
    {
        svgElement: Employee,
        text: 'Employees',
        path: 'employees',
    },
    {
        svgElement: Location,
        text: 'Locations',
        path: 'locations',
    },
];
