import { lazy } from "react";

//0
export const Layout = lazy(()=> import("../Layout/Layout.jsx"));

//1
export const Main = lazy (()=>import("../pages/Main/Main.jsx"))

//2
export const Strucrure = lazy (()=>import("../pages/Strucrure/Strucrure.jsx"))

//3
export const Training = lazy (()=>import("../pages/Training/Training.jsx"))

//4
export const ForeicnRelations = lazy (()=>import("../pages/ForeicnRelations/ForeicnRelations.jsx"))

//5 (Faculties +6)
export const Faculties = lazy (()=>import("../pages/Faculties/Faculties.jsx"))

//6
export const Science = lazy (()=>import("../pages/Science/Science.jsx"));

//6A
export const Rector = lazy(()=>import("../pages/Strucrure/RECTOR.jsx"))

//7
export const Educationns = lazy (()=>import("../pages/Education/Education.jsx"))

//8
export const Request = lazy (()=>import("../pages/Request/Request.jsx"))

//Contact
export const Contact = lazy (()=>import("../pages/Contact/Contact.jsx"));

//Bachelor
export const Bachelor = lazy (()=>import("../pages/Bachelor/Bachelor.jsx"))

//Masters_Degree 
export const Masters_Degree = lazy (()=>import("../pages/Master's_Degree/Masters_Degree.jsx"))

//Postgraduate_studies
export const Postgraduate_studies = lazy(()=>import("../pages/Postgraduate_studies/Postgraduate_studies.jsx"))

//Finance 
export const Finance = lazy(()=>import("../pages/Finance/Finance.jsx"))

// Institute
export const Institute = lazy(()=>import("../pages/Faculties/Digital_institute/Institute.jsx"))

//Department 
export const Departments = lazy(()=>import("../pages/Faculties/Departments/Departments.jsx"))

//Lessons_schedule
export const Lessons_schedule = lazy(()=>import("../pages/Faculties/Lessons_schedule/Lessons_schedule.jsx"))

//Exam_schedule

export const Exam_schedule = lazy(()=>import("../pages/Faculties/Exam_schedule/Exam_schedule.jsx"))

//Documents 
export const Documents = lazy(()=>import("../pages/Faculties/Documents/Documents.jsx"))

//Contact_Faculty 
export const Contact_Faculty = lazy(()=>import("../pages/Faculties/Contact_Faculty/Contact_Faculty.jsx"))


//Dissertation_Council +4
export const Dissertation_Council = lazy(()=>import("../pages/Dissertation_Council/Dissertation_Council.jsx"))

//Documents_Diss
export const Documents_Diss = lazy(()=>import("../pages/Dissertation_Council/Documents_Diss/Documents_Diss.jsx"))

//Certificate_of_quotations
export const Certificate_of_quotations = lazy(()=>import("../pages/Dissertation_Council/Certificate_of_quotations/Certificate_of_quotations.jsx"))

//LayoutDiss
export const LayoutDiss = lazy(()=>import("../pages/Dissertation_Council/Dissertations/LayoutDiss.jsx"))

//Dissertations 
export const Dissertations = lazy(()=>import("../pages/Dissertation_Council/Dissertations/Dissertations.jsx"))
    //Khudoerov_Sh_Kh
    export const Khudoerov_Sh_Kh = lazy(()=>import("../pages/Dissertation_Council/Dissertations/Khudoerov_Sh_Kh.jsx"))

//Announcements
export const Announcements = lazy(()=>import("../pages/Dissertation_Council/Announcements/Announcements.jsx"))

//News
export const News = lazy(()=>import("../pages/News/News.jsx"))


//Layout_Depar_of_info  +4
export const Layout_Depar_of_info = lazy (()=>import("../pages/Faculties/Department_of_information/Layout_Depar_of_info.jsx"))

    //About_the_depart
    export const About_the_depart = lazy(()=>import("../pages/Faculties/Department_of_information/About_the_depart/About_the_depart.jsx"))

    //Teachers_the_depart
    export const Teachers_the_depart = lazy(()=>import("../pages/Faculties/Department_of_information/Teachers_the_depart/Teachers_the_depart.jsx"))

    //Documents2
    export const Documents2 = lazy(()=>import("../pages/Faculties/Department_of_information/Documents_2/Documents2.jsx"))

    //Contact_Information
    export const Contact_Information = lazy(()=>import("../pages/Faculties/Department_of_information/Contact_Information/Contact_Information.jsx"))




export const Error = lazy(()=> import ("../pages/Error/Errot.jsx"));

