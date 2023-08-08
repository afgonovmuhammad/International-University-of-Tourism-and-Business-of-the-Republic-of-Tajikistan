import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About_the_depart, Announcements, Bachelor, Certificate_of_quotations, Contact, Contact_Faculty, Contact_Information, Departments, Dissertation_Council, Dissertations, Documents, Documents2, Documents_Diss, Educationns, Exam_schedule, Faculties, Finance, ForeicnRelations, Institute, Khudoerov_Sh_Kh, Layout, LayoutDiss, Layout_Depar_of_info, Lessons_schedule, Main, Masters_Degree, News, Postgraduate_studies, Rector, Request, Science, Strucrure, Teachers_the_depart, Training, } from './Routes/Routes'
import Loader from './Loader/Loader'


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "/Strucrure",
        element: (
          <Suspense fallback={<Loader />}>
            <Strucrure />
          </Suspense>
        ),
      },
      {
        path: "/Rector",
        element: (
          <Suspense fallback={<Loader />}>
            <Rector />
          </Suspense>
        ),
      },
      {
        path: "/Training",
        element: (
          <Suspense fallback={<Loader />}>
            <Training />
          </Suspense>
        ),
      },
      {
        path: "/ForeicnRelations",
        element: (
          <Suspense fallback={<Loader />}>
            <ForeicnRelations />
          </Suspense>
        ),

      },
      {
        path: "/Faculties",
        element: (
          <Suspense fallback={<Loader />}>
            <Faculties />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Institute />
              </Suspense>
            ),
          },
          {
            path: "Departments",
            element: (
              <Suspense fallback={<Loader />}>
                <Departments />
              </Suspense>
            ),
          },
          {
            path: "Lessons_schedule",
            element: (
              <Suspense fallback={<Loader />}>
                <Lessons_schedule />
              </Suspense>
            ),
          },
          {
            path: "Exam_schedule",
            element: (
              <Suspense fallback={<Loader />}>
                <Exam_schedule />
              </Suspense>
            ),
          },
          {
            path: "Documents",
            element: (
              <Suspense fallback={<Loader />}>
                <Documents />
              </Suspense>
            ),
          },
          {
            path: "Contact_Faculty",
            element: (
              <Suspense fallback={<Loader />}>
                <Contact_Faculty />
              </Suspense>
            ),
          },


        ]
      },
      {
        path: "/Science",
        element: (
          <Suspense fallback={<Loader />}>
            <Science />
          </Suspense>
        ),
      },
      {
        path: "/Educationns",
        element: (
          <Suspense fallback={<Loader />}>
            <Educationns />
          </Suspense>
        ),
      },
      {
        path: "/Request",
        element: (
          <Suspense fallback={<Loader />}>
            <Request />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/Dissertation_Council",
        element: (
          <Suspense fallback={<Loader />}>
            <Dissertation_Council />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Documents_Diss />
              </Suspense>
            ),
          },
          {
            path: "Certificate_of_quotations",
            element: (
              <Suspense fallback={<Loader />}>
                <Certificate_of_quotations />
              </Suspense>
            ),
          },
          {
            path: "LayoutDiss",
            element: (
              <Suspense fallback={<Loader />}>
                <LayoutDiss />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loader />}>
                    <Dissertations />
                  </Suspense>
                ),
              },
              {
                path: "Khudoerov_Sh_Kh",
                element: (
                  <Suspense fallback={<Loader />}>
                    <Khudoerov_Sh_Kh />
                  </Suspense>
                ),
              },

            ]
          },


          {
            path: "Announcements",
            element: (
              <Suspense fallback={<Loader />}>
                <Announcements />
              </Suspense>
            ),
          },

        ]
      },
      {
        path: "/Bachelor",
        element: (
          <Suspense fallback={<Loader />}>
            <Bachelor />
          </Suspense>
        ),
      },
      {
        path: "/Masters_Degree",
        element: (
          <Suspense fallback={<Loader />}>
            <Masters_Degree />
          </Suspense>
        ),
      },
      {
        path: "/Postgraduate_studies",
        element: (
          <Suspense fallback={<Loader />}>
            <Postgraduate_studies />
          </Suspense>
        ),
      },
      {
        path: "/Finance",
        element: (
          <Suspense fallback={<Loader />}>
            <Finance />
          </Suspense>
        ),
      },
      {
        path: "/News",
        element: (
          <Suspense fallback={<Loader />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "/Layout_Depar_of_info",
        element: (
          <Suspense fallback={<Loader />}>
            <Layout_Depar_of_info />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <About_the_depart />
              </Suspense>
            ),
          },
          {
            path: "Teachers_the_depart",
            element: (
              <Suspense fallback={<Loader />}>
                <Teachers_the_depart />
              </Suspense>
            ),
          },
          {
            path: "Documents2",
            element: (
              <Suspense fallback={<Loader />}>
                <Documents2 />
              </Suspense>
            ),
          },
          {
            path: "Contact_Information",
            element: (
              <Suspense fallback={<Loader />}>
                <Contact_Information />
              </Suspense>
            ),
          },

        ]
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <Error />
          </Suspense>
        ),
      }

    ]
  }


])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App