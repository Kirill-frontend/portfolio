import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  const codeString = `function refreshData(studentObj, requestParams) {
  try{
  const pdfFileId = findFileFromFolder(router.pdfFolder, \`\${requestParams.studentsId}.pdf\`)
  const spreadSheetFileId = findFileFromFolder(router.spreadsheetFolder, requestParams.studentsId)

  const generalAbtStudent = getEducationData(requestParams)

  if(pdfFileId) DriveApp.getFileById(pdfFileId).setTrashed(true)  
  
  if(!pdfFileId && !spreadSheetFileId) return null
  if(requestParams.updateKey !== 'ALL') {
    const sheet = SpreadsheetApp.openById(spreadSheetFileId)                    
    updateSemestrTable(sheet, generalAbtStudent, requestParams.semester)    
  } else {
    if(spreadSheetFileId) DriveApp.getFileById(spreadSheetFileId).setTrashed(true)
    generateSheet(studentObj)
  }

  } catch(e) {
    return 'Error: ' + e.toString();
  }  
}`;

  return (
    <div className="container mx-auto flex justify-evenly items-center gap-4 pt-10 h-full relative">
      <div className="absolute hidden md:block top-[15%] left-1/2 h-64 w-64 rounded-full -z-10  bg-[#43D9AD] blur-3xl"></div>
      <div className="absolute top-[50%] left-[85%] h-44 w-44 rounded-full -z-10 hidden md:block bg-[#4D5BCE] blur-3xl"></div>
      {/* Main Info */}
      <div className="">
        <div className="text-primary-text sm:text-lg text-base">Hi all. I am</div>
        <div className="text-primary-text sm:text-6xl text-3xl">Kyrylo Haivoronskyi</div>
        <div className="sm:text-4xl text-2xl text-secondary-blue">
          <span className="mr-2">&#10093;</span> Front-end Developer
        </div>
        <div className="mt-8">
          <div className="text-primary-gray sm:text-base text-sm">
            // you can also see my Github page
          </div>
          <div className="text-primary-gray sm:text-base text-sm"> // or LinkedIn</div>
          <div className="flex gap-1 sm:text-base text-[10px]">
            <span className="text-secondary-blue">const</span>
            <span className="text-secondary-green">githubLink</span>
            <span>=</span>
            <a
              href="https://github.com/Kirill-frontend"
              target="_blank"
              className="text-accent-orange underline"
            >
              'https://github.com/Kirill-frontend'
            </a>
          </div>
          <div className="flex gap-1 sm:text-base text-[10px]">
            <span className="text-secondary-blue">const</span>
            <span className="text-secondary-green">linkedInLink</span>
            <span>=</span>
            <a
              href="https://www.linkedin.com/in/haivoronskyi-kirill/"
              target="_blank"
              className="text-accent-orange underline"
            >
              'https://www.linkedin.com/in/haivoronskyi-kirill/'
            </a>
          </div>
        </div>
      </div>
      {/* Code Syntax*/}
      <div className="hidden md:block">
        <SyntaxHighlighter customStyle={{background: '#011221', borderRadius: '15px', padding: '1em', fontSize: '0.7em'}} language="javascript" style={atomOneDark}>{codeString}</SyntaxHighlighter>
      </div>
    </div>
  );
}
