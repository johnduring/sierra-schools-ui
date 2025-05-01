export interface MenuItem {
    label: string;
    path: string;
    icon?: string; // Optional: if you want to use icons later
  }
  
  export const MENU_ITEMS: MenuItem[] = [
    { label: 'Students', path: '/students' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Courses', path: '/courses' },
    { label: 'Users', path: '/users' }
  ];
  