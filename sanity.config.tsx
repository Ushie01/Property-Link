import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';


//
const config = defineConfig({
    projectId: '05gkot5t',
    dataset: 'production',
    title: "PL Site",
    apiVersion: "2023-05-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
});

export default config;