const path = require('path')

exports.createPages = async ({graphql, actions}) =>{

  const result = await graphql(`
    query MyQuery {
      allEducationJson{
        edges{
          node{
            slug
          }
        }
      }
    }
    `);

  result.data.allEducationJson.edges.forEach((element) =>{
    const {node} = element;
    //const node = element.node;

    actions.createPage({
      path: node.slug,
      component: path.resolve("./src/templates/Education.js"),
      context:{
        slug: node.slug
      }
    })
  })


}
