interface departments {
    id: number;
    department: string;
}

interface employee extends departments {
    name: string;
    location: string;
}

export const mockDepartments: departments[] = [
    {
        id: 1,
        department: 'Department A',
    },
    {
        id: 2,
        department: 'Department B',
    },
    {
        id: 3,
        department: 'Department C',
    },
];

export const mockEmployees: employee[] = [
    {
        id: 1,
        name: 'Ronald Mcdonald',
        department: 'R&D',
        location: 'USA',
    },
    {
        id: 2,
        name: 'Nick Young',
        department: 'HR',
        location: 'APAC',
    },
    {
        id: 3,
        name: 'Super Mario',
        department: 'Delivery',
        location: 'Japan',
    },
];
