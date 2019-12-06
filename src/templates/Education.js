import React from 'react';
import {Link} from 'gatsby';

function Education(props){
  console.log(props.data);
  const pageData = props.data.educationJson;

  return(
    <div>
      <header className="py-12 border-purple-500 border-solid border-t-8">
        <div className="max-w-4xl mx-auto"></div>
        <Link to={`/`} className="btn">Volver al inicio</Link>
        <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
        <p>{pageData.description}</p>
      </header>

      <ul>
        {
          pageData.items.map((item, index) => {
            return(
              <li className="bg-white mt-4 flex" key={index}>
                <p>{pageData.slug}</p>
                <div className="flex items-center flex-1 p-8">
                  <div className="flex-1">
                    <h3>{item.name}</h3>

                    {item.degree &&  <span>Degree: {item.degree}</span>}

                    {item.url && <a className="btn" target="_blank" rel="noopener noreferrer" href={item.url}>Ir a la pagina</a>}
                  </div>

                  <div className="inline-block">
                    <span className="inline-block bg-green-100">{item.score}</span>
                  </div>

                </div>
              </li>
            );
          })
        }

      </ul>
    </div>
  );
}

export const query = graphql`
  query($slug : String){
    educationJson(slug: { eq: $slug}){
      slug
      title
      description
      items{
        name
        degree
        url
        score
      }
    }
  }
`;

export default Education;
