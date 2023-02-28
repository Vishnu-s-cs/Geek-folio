import { Link } from "react-router-dom";
import axios from "./axios";

export const userColumns = [
    { field: "_id", headerName: "ID", flex:1 },
    {
      field:'Name',
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <Link to={'/profile/'+params.row._id} className='link'>
            <img className="cellImg" src={params.row.picture} alt="avatar" />
         <div style={{display:'inline',position:'absolute',paddingTop:'7px'}}>
         {params.row.name}
         </div>
           
           
            </Link>
          </div>
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      flex:1,
    },
    {
      field: "email",
      headerName: "Email",
      flex:1,
    },
    {
      field: "phone_number",
      headerName: "Phone",
      flex:1,
    },
  ];

  //temp starting data , this will automatically replace with actual data after data received from backend
 export const userRows = [
  {
      "_id": "63fdd756c230ac64e66218212",
      "name": "Hoebart",
      "email": "hlongfellow0@reuters.com",
      "phone_number": "650-605-5435",
      "title": "Help Desk Technician",
      "education": "National Chung Cheng University",
      "emp_hist": "Torphy, Sporer and Kilback",
      "age": 22,
      "picture": "https://robohash.org/dolorempossimusveritatis.png?size=50x50&set=set1",
      "department": "Business Development"
  },
  {
      "_id": "63fdd756c230ac64e66218223",
      "name": "Winnie",
      "email": "wmouse1@mit.edu",
      "phone_number": "781-551-9236",
      "title": "Tax Accountant",
      "education": "Tianjin Academy of Fine Art",
      "emp_hist": "Brown-Luettgen",
      "age": 26,
      "picture": "https://robohash.org/inestconsequatur.png?size=50x50&set=set1",
      "department": "Research and Development"
  },
  {
      "_id": "63fdd756c230ac64e66218234",
      "name": "Farrand",
      "email": "fdrissell2@dot.gov",
      "phone_number": "870-962-1820",
      "title": "Mechanical Systems Engineer",
      "education": "Taisho University",
      "emp_hist": "Reynolds-Barrows",
      "age": 38,
      "picture": "https://robohash.org/quiexsed.png?size=50x50&set=set1",
      "department": "Research and Development"
  },
  {
      "_id": "63fdd756c230ac64e66218245",
      "name": "Estell",
      "email": "ecornau3@zdnet.com",
      "phone_number": "570-249-3506",
      "title": "Executive Secretary",
      "education": "Université François Rabelais de Tours",
      "emp_hist": "Kirlin-Parisian",
      "age": 39,
      "picture": "https://robohash.org/voluptasblanditiiseum.png?size=50x50&set=set1",
      "department": "Research and Development"
  },
  {
      "_id": "63fdd756c230ac64e66218256",
      "name": "Blondelle",
      "email": "bscandred4@bluehost.com",
      "phone_number": "566-365-4161",
      "title": "Engineer IV",
      "education": "Linton University College",
      "emp_hist": "Torp-Ankunding",
      "age": 47,
      "picture": "https://robohash.org/asperioresanimiad.png?size=50x50&set=set1",
      "department": "Services"
  },
  {
      "_id": "63fdd756c230ac64e66218267",
      "name": "Fayette",
      "email": "fmahedy5@lulu.com",
      "phone_number": "263-935-9575",
      "title": "Information Systems Manager",
      "education": "Zagazig University",
      "emp_hist": "Larson, Buckridge and Schoen",
      "age": 20,
      "picture": "https://robohash.org/autemarchitectoqui.png?size=50x50&set=set1",
      "department": "Services"
  },
  {
      "_id": "63fdd756c230ac64e66218278",
      "name": "Guillema",
      "email": "gshortall6@phpbb.com",
      "phone_number": "267-243-1516",
      "title": "Account Coordinator",
      "education": "Concordia University, Mequon",
      "emp_hist": "Herman, Barton and Satterfield",
      "age": 45,
      "picture": "https://robohash.org/sitvoluptateoccaecati.png?size=50x50&set=set1",
      "department": "Support"
  },
  {
      "_id": "63fdd756c230ac64e66218289",
      "name": "Cathee",
      "email": "cdavidzon7@eepurl.com",
      "phone_number": "527-165-2845",
      "title": "Web Developer IV",
      "education": "Buddhasravaka Bhikshu University",
      "emp_hist": "Romaguera-Langosh",
      "age": 46,
      "picture": "https://robohash.org/voluptatumvoluptatemamet.png?size=50x50&set=set1",
      "department": "Engineering"
  },
  {
      "_id": "63fdd756c230ac64e662182910",
      "name": "Daloris",
      "email": "djahnig8@amazon.co.uk",
      "phone_number": "631-339-7424",
      "title": "Junior Executive",
      "education": "Tarlac State University",
      "emp_hist": "Casper LLC",
      "age": 36,
      "picture": "https://robohash.org/occaecatiestreprehenderit.png?size=50x50&set=set1",
      "department": "Product Management"
  }]


  