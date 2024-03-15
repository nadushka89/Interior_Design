import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import BlogDetailsPage from '../pages/BlogDetailsPage.vue';
import BlogPage from '../pages/BlogPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,BlogDetailsPage, BlogPage,ProjectDetails,NotFoundPage,ProjectPage
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage,
  },
  {
    path: '/project/:page',
    name: 'projectArticle',
    component: ProjectPage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
  },
  {
    path: '/blog/:page',
    name: 'blogArticle',
    component: BlogPage,
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: ProjectDetails,
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: ProjectDetails,
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
