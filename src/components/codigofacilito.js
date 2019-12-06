import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery{
      codigofacilitoJson {
        data{
          courses{
          	title
            progress
        	}
        }
      }
    }
  `)

  console.log(data);
  return (
    <section>
      <div className="mt-24">

        <div className="max-w-4xl mx-auto">
          <h2>Mis cursos en codigo facilito</h2>

          <div className="flex mt-8">
            {
              data.codigofacilitoJson.data.courses.map((course) => {
                return(
                  <div key={course.title} className="shadow p-8 bg-white mr-4">
                    <h4 className="font-bold">{course.title}</h4>
                    <p className="text-center">Progreso: {course.progress}</p>
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>
    </section>
  )
}
