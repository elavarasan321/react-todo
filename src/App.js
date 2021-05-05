// import React from 'react'; 
// //import  logo  from "./logo.svg";

// //import ReactDOM from 'react-dom';  

// // function Welcome(props) {
//     //return <h1>Hello, {props.data}</h1>;
    
// //   }


 
// //   export const Welcome = () => {
// //    const author={
// //         name:"elavarasan",
// //         text:"i am React web Developer",
// //         image:logo,
// //         date:new Date().getDate()
// //     }
// //     return (
// //           <Vanakam author={author}/>      
// //       );
// //   }
// // export const Vanakam = (props) => {
// //     return (
// //         <div className="Comment">
// //           <div className="UserInfo">
// //             <img className="Avatar"
// //               src={props.author.image}
// //               alt={props.author.name}
// //             />
// //             <div className="UserInfo-name">
// //               {props.author.name}
// //             </div>
// //           </div>
// //           <div className="Comment-text">
// //             {props.author.text}
// //           </div>
// //           <div className="Comment-date">
// //             {props.author.date}
// //           </div>
// //         </div>
// //       );
// // }

// // export const Mount = (props) => { 
  
// //   const numbers = props.numbers;
// //   const listItems = numbers.map((number) =>
// //     <li >{number}</li>
// //   );
// //   return (
// //     <ul>{listItems}</ul>
// //   );
// // }
// export function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div className="Avatar">
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }


