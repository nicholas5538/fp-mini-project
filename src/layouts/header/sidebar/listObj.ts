import { ReactComponent as Dashboard } from '../../../assets/dashboard.svg';
import { ReactComponent as Company } from '../../../assets/company.svg';
import { ReactComponent as Project } from '../../../assets/project.svg';
import { ReactComponent as Settings } from '../../../assets/settings.svg';
import { ReactComponent as Department } from '../../../assets/department.svg';
import { ReactComponent as Employee } from '../../../assets/employee.svg';
import { ReactComponent as Location } from '../../../assets/location.svg';

type path = {
    path: string;
};

type listElements = {
    svgElement: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    text: string;
};

export const sidebarObj: (listElements & path)[] = [
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
        path: '/',
    },
    {
        svgElement: Settings,
        text: 'Settings',
        path: '/',
    },
];

export const dropdownObj: listElements[] = [
    {
        svgElement: Department,
        text: 'Departments',
    },
    {
        svgElement: Employee,
        text: 'Employees',
    },
    {
        svgElement: Location,
        text: 'Locations',
    },
];
