import Homepage from './HomePage/Homepage.vue';
import Login from '../components/Authentication/Login.vue'
import Register from '../components/Authentication/Register.vue'
import DetailPost from './DetailPost/DetailPost.vue'
import UserInformation from './UserInformation/UserInformation.vue'

import Message from './DirectPages/Message.vue'
import Explore from './DirectPages/Explore.vue';
export default [
    {
        path: '/login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/',
        component: Homepage,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/post/:id',
        name: 'detail-post',
        component: DetailPost,
    },
    {
        path: '/:id',
        name: 'user-information',
        component: UserInformation
    },
    {
        path: '/direct',
        component: Message,
        children : [
            {
                path: 'message',
                name: 'message',
                component: Message
            },
            {
                path: 'explore',
                name: 'explore',
                component: Explore
            }
        ]
    }
];
