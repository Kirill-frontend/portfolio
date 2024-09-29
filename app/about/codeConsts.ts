export const aboutCode: string = `/* 
* About me
* I have 1 year commerce experience in web development
* A front-end developer, I am passionate about creating 
* intuitive and responsive web experiences using React and Next.js.
*  My passion for learning new technologies and attention to detail 
* allow me to quickly solve complex problems and implement
* modern approaches. 
* I will strive to achieve high efficiency in all aspects of 
* the job and prepare to adapt
* to the needs of the project.
*/`;

export const firstTaskCode: string = `
function sumStrings(a,b) { 
if (a >= Number.MAX_SAFE_INTEGER ||
    b >= Number.MAX_SAFE_INTEGER) {
  const bigIntA = BigInt(a)
  const bigIntB = BigInt(b)
  return (bigIntA + bigIntB).toString()
}
return (+a + +b).toString()
}
`;

export const secondTaskCode: string = `
function domainName(url){  
if(url.includes('http')) {
  if (url.includes('www')) {
    return url.split('.')[1]
  }
  return url.split('//')[1].split('.')[0]
} else if (url.includes('www')) {
  return url.split('.')[1]
} else return url.split('.')[0]

}
`;

export const interestCode: string = `
/* 
* Interests
* I enjoy.
*/`;

export const educationCode: string = `
/* 
* Education
* I have a bachelor's degree in Automation and Computer-Integrate 
* Technologies from the Bohdan Khmelnitsky National 
* University of Cherkasy.
*/`;

export const workXPCode: string = `
/*
 * Work Experience
 * I have worked as a front-end developer for 1 years.
 * I'm Developed and implemented web services to
 * reamline internal operations of the educational
 * initution. Improved the eiciency and usability of
 * internal syems, resulting in a 30% faer
 * processing time for adminirative tasks and
 * enhancing the user experience for students.
*/`;

export type tabsContentType = {
  content: string;
  color: string;
  title: string;
  selected: boolean;
  id: number;
}

export const tabsContent: tabsContentType[] = [
  {id: 0, content: aboutCode, color: "green", title: "bio", selected: true },  
  {id: 1, content: educationCode, color: "lightBlue", title: "education", selected: false },
  {id: 2, content: workXPCode, color: "white", title: "professional", selected: false },
];
