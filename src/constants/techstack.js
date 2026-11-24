import {
  BookOpen,
  Palette,
  Shapes,
  Type,
} from "lucide-react";

import javascriptLogo from "../assets/expertise/langs/javascript.png";
import pythonLogo from "../assets/expertise/langs/python.png";
import javaLogo from "../assets/expertise/langs/java.png";
import htmlLogo from "../assets/expertise/web/html.png";
import cssLogo from "../assets/expertise/web/css.png";
import reactLogo from "../assets/expertise/frameworks/react.png";
import nextjsLogo from "../assets/expertise/frameworks/nextjs.png";
import tailwindLogo from "../assets/expertise/frameworks/tailwind.png";
import nodeLogo from "../assets/expertise/frameworks/node.png";
import springBootLogo from "../assets/expertise/frameworks/springboot.png";
import flaskLogo from "../assets/expertise/frameworks/flask.png";
import viteLogo from "../assets/expertise/frameworks/vite.png";
import framerMotionLogo from "../assets/expertise/frameworks/framermotion.png";
import reactNativeLogo from "../assets/expertise/frameworks/reactnative.png";
import postgresqlLogo from "../assets/expertise/database/postgresql.png";
import mysqlLogo from "../assets/expertise/database/mysql.png";
import mongodbLogo from "../assets/expertise/database/mongodb.png";
import oracleDatabaseLogo from "../assets/expertise/database/oracledatabase.png";
import vercelLogo from "../assets/expertise/cloud/vercel.png";
import firebaseLogo from "../assets/expertise/cloud/firebase.png";
import netlifyLogo from "../assets/expertise/cloud/netlify.png";
import neonLogo from "../assets/expertise/cloud/neon.png";
import openshiftLogo from "../assets/expertise/cloud/openshift.png";
import gitLogo from "../assets/expertise/versioncontrol/git.png";
import githubLogo from "../assets/expertise/versioncontrol/github.png";
import bitbucketLogo from "../assets/expertise/versioncontrol/bitbucket.png";
import jenkinsLogo from "../assets/expertise/devops/jenkins.png";
import gitlabLogo from "../assets/expertise/devops/gitlab.png";
import sonarqubeLogo from "../assets/expertise/codequality/sonarcube.png";
import wizLogo from "../assets/expertise/codequality/wiz.png";
import kibanaLogo from "../assets/expertise/logging/kibana.png";
import observeLogo from "../assets/expertise/logging/observe.png";
import vscodeLogo from "../assets/expertise/ide/vscode.png";
import intellijLogo from "../assets/expertise/ide/intellij.png";
import figmaLogo from "../assets/expertise/design/figma.png";
import userResearchLogo from "../assets/expertise/design/userresearch.png";
import wireframingLogo from "../assets/expertise/design/wireframing.png";
import prototypingLogo from "../assets/expertise/design/prototyping.png";
import googleAnalyticsLogo from "../assets/expertise/seo/googleanalytics.png";
import searchConsoleLogo from "../assets/expertise/seo/googlesearchconsole.png";

/**
 * TECH registry: every technology is defined once with its display label and icon/asset.
 */
export const TECH = {
  // Languages
  javascript: { name: "JavaScript", image: javascriptLogo },
  python: { name: "Python", image: pythonLogo },
  java: { name: "Java", image: javaLogo },

  // Web technologies
  html5: { name: "HTML5", image: htmlLogo },
  css3: { name: "CSS3", image: cssLogo },

  // Frameworks & libraries
  react: { name: "React.js", image: reactLogo },
  nextjs: { name: "Next.js", image: nextjsLogo },
  tailwind: { name: "Tailwind CSS", image: tailwindLogo },
  nodejs: { name: "Node.js", image: nodeLogo },
  springBoot: { name: "Spring Boot", image: springBootLogo },
  flask: { name: "Flask", image: flaskLogo },
  vite: { name: "Vite", image: viteLogo },
  framerMotion: { name: "Framer Motion", image: framerMotionLogo },
  reactNative: { name: "React Native", image: reactNativeLogo },

  // Databases
  postgresql: { name: "PostgreSQL", image: postgresqlLogo },
  mysql: { name: "MySQL", image: mysqlLogo },
  mongodb: { name: "MongoDB", image: mongodbLogo },
  oracleDb: { name: "Oracle Database", image: oracleDatabaseLogo },

  // Cloud & deployment
  vercel: { name: "Vercel", image: vercelLogo },
  firebase: { name: "Firebase", image: firebaseLogo },
  netlify: { name: "Netlify", image: netlifyLogo },
  neon: { name: "Neon.tech", image: neonLogo },
  openshift: { name: "OpenShift", image: openshiftLogo },

  // Version control
  git: { name: "Git", image: gitLogo },
  github: { name: "GitHub", image: githubLogo },
  bitbucket: { name: "Bitbucket", image: bitbucketLogo },

  // CI/CD, quality, monitoring
  jenkins: { name: "Jenkins", image: jenkinsLogo },
  gitlab: { name: "GitLab", image: gitlabLogo },
  sonarqube: { name: "SonarQube", image: sonarqubeLogo },
  wiz: { name: "Wiz", image: wizLogo },
  kibana: { name: "Kibana", image: kibanaLogo },
  observe: { name: "Observe", image: observeLogo },

  // IDEs
  vscode: {
    name: "Visual Studio Code (VS Code)",
    image: vscodeLogo,
  },
  intellij: { name: "IntelliJ IDEA", image: intellijLogo },

  // Design & planning
  figma: { name: "Figma", image: figmaLogo },
  userResearch: { name: "User Research", image: userResearchLogo },
  wireframing: { name: "Wireframing", image: wireframingLogo },
  prototyping: { name: "Prototyping", image: prototypingLogo },
  illustrator: { name: "Adobe Illustrator" },
  photoshop: { name: "Adobe Photoshop" },
  brandGuidelines: { name: "Brand Guidelines", icon: BookOpen },
  typography: { name: "Typography", icon: Type },
  colorTheory: { name: "Color Theory", icon: Palette },
  assetDesign: { name: "Asset Design", icon: Shapes },

  // SEO & analytics
  googleAnalytics: { name: "Google Analytics", image: googleAnalyticsLogo },
  searchConsole: { name: "Google Search Console", image: searchConsoleLogo },
};

const {
  javascript, python, java, html5, css3, react, nextjs, tailwind, nodejs,
  springBoot, flask, vite, framerMotion, reactNative, postgresql, mysql,
  mongodb, oracleDb, vercel, firebase, netlify, neon, openshift, git, github,
  bitbucket, jenkins, gitlab, sonarqube, wiz, kibana, observe, vscode,
  intellij, figma, userResearch, wireframing, prototyping, illustrator,
  photoshop, brandGuidelines, typography, colorTheory, assetDesign,
  googleAnalytics, searchConsole,
} = TECH;

export const TECH_STACK = {
  webDevelopment: {
    frontend: [javascript, html5, css3, react, nextjs, tailwind, vite, framerMotion],
    backend: [python, java, nodejs, springBoot, flask],
    databases: [postgresql, mysql, mongodb, oracleDb],
    cloudAndDeployment: [vercel, firebase, netlify, neon, openshift],
    versionControl: [git, github, bitbucket],
    ciCdDevOps: [jenkins, gitlab],
    codeQualityAndSecurity: [sonarqube, wiz],
    monitoringAndObservability: [kibana, observe],
    idesAndEditors: [vscode, intellij],
  },
  mobileDevelopment: {
    programmingLanguages: [javascript, java, python],
    frameworksAndLibraries: [reactNative, tailwind],
    databases: [mongodb, mysql, postgresql, firebase],
    cloudAndDeployment: [firebase, openshift],
    versionControl: [git, github, bitbucket],
    ciCdDevOps: [gitlab, jenkins],
    codeQualityAndSecurity: [sonarqube, wiz],
    monitoringAndObservability: [kibana, observe],
    idesAndEditors: [vscode, intellij],
  },
  uiUxDesign: {
    frameworksAndLibraries: [tailwind],
    webTechnologies: [html5, css3],
    creativeAndPlanning: [figma, userResearch, wireframing, prototyping],
  },
  adminPanelDev: {
    frontend: [javascript, react, nextjs, tailwind],
    backend: [python, java, nodejs, springBoot, flask],
    databases: [postgresql, mysql, mongodb, oracleDb],
    cloudAndDeployment: [vercel, firebase, neon, openshift],
    versionControl: [git, github, bitbucket],
    ciCdDevOps: [jenkins, gitlab],
    monitoringAndObservability: [kibana, observe],
    idesAndEditors: [vscode, intellij],
  },
  seoServices: {
    webTechnologies: [html5, css3],
    frameworksAndLibraries: [nextjs],
    seoAndAnalytics: [googleAnalytics, searchConsole],
  },
  brandIdentity: {
    creativeAndDesign: [illustrator, photoshop, brandGuidelines, typography, colorTheory, assetDesign],
  },
};
