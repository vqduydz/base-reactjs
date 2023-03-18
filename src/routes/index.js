import { Home, NotFoundPage } from '_/components/pages';

const routes = {
    home: '/',

    notfoundpage: '*',
};

const PublicRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.notfoundpage, comp: NotFoundPage },
];

const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes, routes };
