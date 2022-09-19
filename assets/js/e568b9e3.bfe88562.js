"use strict";(self.webpackChunknewsfetch_website=self.webpackChunknewsfetch_website||[]).push([[732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,p=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:52},i="Common Crawl News Extraction",s={unversionedId:"features/common-crawl-news-extraction",id:"features/common-crawl-news-extraction",title:"Common Crawl News Extraction",description:"About Common Crawl",source:"@site/docs/features/common-crawl-news-extraction.md",sourceDirName:"features",slug:"/features/common-crawl-news-extraction",permalink:"/docs/features/common-crawl-news-extraction",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/features/"},next:{title:"Docker images",permalink:"/docs/features/docker"}},l={},c=[{value:"About Common Crawl",id:"about-common-crawl",level:2},{value:"Common Crawl News Dataset",id:"common-crawl-news-dataset",level:2},{value:"Installation",id:"installation",level:2},{value:"Fetching latest WARC file from CommonCrawl S3 bucket",id:"fetching-latest-warc-file-from-commoncrawl-s3-bucket",level:2},{value:"Extracting content from WARC file",id:"extracting-content-from-warc-file",level:2},{value:"Processing extracted article with NewsPlease",id:"processing-extracted-article-with-newsplease",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-crawl-news-extraction"},"Common Crawl News Extraction"),(0,r.kt)("h2",{id:"about-common-crawl"},"About Common Crawl"),(0,r.kt)("p",null,"CommonCrawl is a non-profit organization that provides a free and open repository of web crawl data.\nIt is a great source of data for NewsFetch."),(0,r.kt)("p",null,"Let us go over the process of using NewsFetch to extract News data from CommonCrawl.\nThe extracted data is further processed with NewsPlease."),(0,r.kt)("h2",{id:"common-crawl-news-dataset"},"Common Crawl News Dataset"),(0,r.kt)("p",null,"CommonCrawl News data is available in an AWS S3 bucket. The details are ",(0,r.kt)("a",{parentName:"p",href:"https://commoncrawl.org/2016/10/news-dataset-available/"},"here"),"."),(0,r.kt)("p",null,"The data is available as a compressed WARC file. WARC is a file format for storing web crawl data."),(0,r.kt)("p",null,"NewsFetch provides command line scripts to extract News data from CommonCrawl.\nThe script is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NewsFetch/NewsFetch/tree/main/newsfetch-common-crawl"},"newsfetch-common-crawl")," subproject."),(0,r.kt)("h1",{id:"docker-images"},"Docker images"),(0,r.kt)("p",null,"To use Docker images refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/docker"},"Docker")," page."),(0,r.kt)("h1",{id:"using-newsfetch-scripts-natively"},"Using NewsFetch scripts natively"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Navigate to the subproject root directory and follow the installation instructions from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro"},"Quick Start Guide"),"."),(0,r.kt)("h2",{id:"fetching-latest-warc-file-from-commoncrawl-s3-bucket"},"Fetching latest WARC file from CommonCrawl S3 bucket"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get_latest_warc.sh")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/get_latest_warc.sh"},"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/get_latest_warc.sh"),") script is used to fetch the latest WARC file from CommonCrawl S3 bucket."),(0,r.kt)("p",null,"The configuration for the destination directory where the WARC file will be downloaded can be specified\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMON_CRAWL_DATA_DIR")," environment variable. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"./commoncrawl-data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'COMMON_CRAWL_DATA_DIR="./commoncrawl-data"\n')),(0,r.kt)("p",null,"This script will download the latest WARC file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMON_CRAWL_DATA_DIR")," directory."),(0,r.kt)("p",null,"The file name will be in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CC-NEWS-<YYYYMMDDHHMMSS>-<RANDOM>.warc.gz\n")),(0,r.kt)("p",null,"The file is approximately 1GB in size."),(0,r.kt)("p",null,"At the end of the script, the WARC file name and the destination path will be printed to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "warc_file_name": "CC-NEWS-20210911100000-00010.warc.gz",\n  "destination_file": "./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz",\n  "took": 200\n}\n')),(0,r.kt)("p",null,"The structure of the directory will be along the lines of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"\u251c\u2500\u2500 commoncrawl-data\n|  \u251c\u2500\u2500 CC-NEWS-20210911100000-00010.warc.gz\n")),(0,r.kt)("h2",{id:"extracting-content-from-warc-file"},"Extracting content from WARC file"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_warc.sh")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/extract_warc.sh"},"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/extract_warc.sh"),") script is used to extract content from the WARC file."),(0,r.kt)("p",null,"A command line argument, pointing to the WARC file to be processed, needs to be specified as well.\nRemember that the output of the first script has the path to the destination file. The value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination_file")," field can be used here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--warc-file-path <path to WARC file>\n")),(0,r.kt)("p",null,"Example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./extract_warc.sh --warc-file-path ./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz\n")),(0,r.kt)("p",null,"The configuration for the destination folder where the processed articles from the WARC file will be stored can be\nchanged by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"WARC_EXTRACT_DIR")," environment variable. The default value for this variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"warc-extract"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'WARC_EXTRACT_DIR = "warc-extract"\n')),(0,r.kt)("p",null,"The script will first uncompress the WARC file, and then create a subdirectory with the name of the WARC file (without extension). Within this subdirectory, it will create another subdirectory using the name provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"WARC_EXTRACT_DIR")," variable.\nNow, as it processed the WARC file, it will create a subdirectory within ",(0,r.kt)("inlineCode",{parentName:"p"},"WARC_EXTRACT_DIR")," for each unique web domain that is present in the archive.\nWithin this domain subdirectory, each article in the WARC is processed, and the processed contents are stored as JSON with the article's unique UUID as the file name (with ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," extension)"),(0,r.kt)("p",null,"A sample article, in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"warc-extract/9c496b40-4344-4714-b50d-02a38b4f8028.json"),", is shown below. The HTML content of the article is not shown for brevity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataset_id": "9c496b40-4344-4714-b50d-02a38b4f8028",\n  "dataset": "news-cc",\n  "dataset_content_length": "154384",\n  "uri": "https://www.pbs.org/newshour/nation/weather-aids-firefighters-but-threat-from-western-wildfires-persists",\n  "warc_sourced_date": "2022-09-11T23:19:04Z",\n  "warc_extracted_date": "2022-09-11T22:27:52Z",\n  "domain": "www.pbs.org",\n  "article_html": "[HTML content of the article]"\n}\n')),(0,r.kt)("p",null,"The structure of the directory will be along the following lines now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"\u251c\u2500\u2500 commoncrawl-data\n|  \u251c\u2500\u2500 CC-NEWS-20210911100000-00010.warc.gz\n|  \u251c\u2500\u2500 CC-NEWS-20210911100000-00010\n|  |  \u251c\u2500\u2500 warc-extract\n|  |  |  \u251c\u2500\u2500 www.pbs.org\n|  |  |  |  |\u2500\u2500 9c496b40-4344-4714-b50d-02a38b4f8028.json\n|  |  |  |  |\u2500\u2500 a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json\n|  |  |  \u251c\u2500\u2500 www.1news.co.nz\n|  |  |  |  |\u2500\u2500 01e5e008-3a39-43a0-a458-daa500782f97.json\n")),(0,r.kt)("h2",{id:"processing-extracted-article-with-newsplease"},"Processing extracted article with NewsPlease"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"process_extracted_warc_files.sh")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/process_extracted_warc_files.sh"},"https://github.com/NewsFetch/NewsFetch/blob/main/newsfetch-common-crawl/process_extracted_warc_files.sh"),") script is used to process the articles with NewsPlease."),(0,r.kt)("p",null,"A command line argument, pointing to the WARC file to be processed, needs to be specified as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--warc-file-path <path to WARC file>\n")),(0,r.kt)("p",null,"Example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./process_extracted_warc_files.sh --warc-file-path ./commoncrawl-data/CC-NEWS-20210911100000-00010.warc.gz\n")),(0,r.kt)("p",null,"The configuration for the destination folder where the processed articles from the WARC file will be stored can be\nchanged by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROCESSED_CONTENT_DIR")," environment variable. The default value for this variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"processed-content"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.env"},'PROCESSED_CONTENT_DIR = "processed-content"\n')),(0,r.kt)("p",null,"The script runs through each extracted article in ",(0,r.kt)("inlineCode",{parentName:"p"},"warc-extract")," directory, and processes it with NewsPlease. The processed output is stored in\na similar directory structure as the ",(0,r.kt)("inlineCode",{parentName:"p"},"warc-extract")," directory, but in a subdirectory created with the name supplied in the\nenvironment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PROCESSED_CONTENT_DIR"),"."),(0,r.kt)("p",null,"A sample processed article, in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"processed-content/9c496b40-4344-4714-b50d-02a38b4f8028.json"),", is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://www.pbs.org/newshour/nation/weather-aids-firefighters-but-threat-from-western-wildfires-persists",\n  "title": "Weather aids firefighters, but threat from Western wildfires persists",\n  "authors": [\n    "Associated Press"\n  ],\n  "content": "FORESTHILL, Calif. (AP) \\u2014 Firefighters made progress against a huge Northern California wildfire that was still growing and threatening thousands of mountain homes, while crews also battled major blazes Sunday in Oregon and Washington.\\nThe Mosquito Fire in foothills east of Sacramento spread to nearly 65 square miles (168 square kilometers), with 10% containment, according to the California Department of Forestry and Fire Protection, or Cal Fire.\\n\\u201cCooler temperatures and higher humidity assisted with moderating some fire activity,\\u201d but higher winds allowed the flames to push to the north and northeast, according to a Cal Fire incident report Sunday.\\nMore than 5,800 structures in Placer and El Dorado counties were under threat and some 11,000 residents of communities including Foresthill and Georgetown were under evacuation orders.\\nIn Southern California, cooler temperatures and rain brought respite to firefighters battling the massive Fairview Fire about 75 miles (121 kilometers) southeast of Los Angeles after sweltering heat last week.\\nWATCH: Historic, unrelenting heat wave grips the Western US\\nThe 44-square-mile (114-square-kilometer) blaze was 45% contained Sunday. The fire has destroyed at least 30 homes and other structures in Riverside County. Two people died while fleeing flames last Monday.\\nThe southern part of the state welcomed the cooler weekend weather as a tropical storm veered off the Pacific Coast and faded, helping put an end to blistering temperatures that nearly overwhelmed the state\\u2019s electrical grid.\\nThunderstorms and the risk of flooding persisted in mountainous areas of greater Los Angeles on Sunday. But after Hurricane Kay made landfall in Mexico last week it quickly was downgraded and weakened further until it largely disappeared, forecasters said.\\nIn Washington state, a raging wildfire sparked Saturday in the remote Stevens Pass area sent hikers fleeing and forced evacuations of mountain communities. There was no containment Sunday of the Bolt Creek Fire, which had scorched nearly 12 square miles (31 square kilometers) of forestland east of Seattle.\\n\\u201cIt\\u2019s going to be several days\\u201d before crews get a handle on the blaze, Peter Mongillo, spokesperson for Snohomish Regional Fire and Rescue, told the Seattle Times.\\nCalifornia\\u2019s Mosquito Fire has covered a large portion of the Northern Sierra region with smoke. California health officials urged people in affected areas to stay indoors where possible. Organizers of the Tour de Tahoe canceled the annual 72-mile (115-km) bicycle ride scheduled Sunday around Lake Tahoe because of the heavy smoke from the blaze \\u2014 more than 50 miles (80 km) away. Last year\\u2019s ride was canceled because of smoke from another big fire south of Tahoe.\\nThe Mosquito Fire\\u2019s cause remained under investigation. Pacific Gas & Electric said unspecified \\u201celectrical activity\\u201d occurred close in time to the report of the fire on Tuesday.\\nScientists say climate change has made the West warmer and drier over the last three decades and will continue to make weather more extreme and wildfires more frequent and destructive. In the last five years, California has experienced the largest and most destructive fires in state history.\\nREAD MORE: California\\u2019s \\u2018climate migrants\\u2019 and the difficulty of finding a new home\\nAnd the rest of the West hasn\\u2019t been immune. There were at least 18 large fires burning in Oregon and Washington, leading to evacuations and targeted power outages near Portland as the challenge of dry and windy conditions continued in the region.\\nSprawling areas of western Oregon choked by thick smoke from the fires in recent days were expected to see improved air quality on Sunday thanks to a returning onshore flow, Oregon Public Broadcasting reported.\\nSouth of Portland, more than 3,000 residents were under new evacuation orders because of the 134-square-mile (347-square-kilometer) Cedar Creek Fire, which has burned for over a month across Lane and Deschutes counties. Firefighters were protecting remote homes in Oakridge, Westfir and surrounding mountain communities.\\nAccording to the Northwest Interagency Coordination Center, this weekend there were more than 400 square miles (1,035 square kilometers) of active, uncontained fires and nearly 5,000 people on the ground fighting them in the two northwestern states.",\n  "excerpt": "Firefighters made progress against a huge Northern California wildfire that was still growing and threatening thousands of mountain homes, while crews also battled major blazes Sunday in Oregon and Washington.",\n  "content_length": 4328,\n  "published_date": "2022-09-20T00:00:00Z",\n  "language": "en",\n  "domain": "www.pbs.org",\n  "media": "https://d3i6fh83elv35t.cloudfront.net/static/2022/09/2022-09-10T045514Z_664159068_RC22EW9YJJ3C_RTRMADP_3_CALIFORNIA-HEAT-MOSQUITO-FIRE-1-1024x614.jpg",\n  "meta_info": {\n    "dataset_id": "9c496b40-4344-4714-b50d-02a38b4f8028",\n    "dataset": "news-cc",\n    "dataset_content_length": "154384",\n    "warc_sourced_date": "2022-09-11T23:19:04Z",\n    "warc_extracted_date": "2022-09-11T22:27:52Z",\n    "warc_processed_date": "2022-09-11T23:26:31Z"\n  }\n}\n')),(0,r.kt)("p",null,"The structure of the directory will be along the following lines now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"\u251c\u2500\u2500 commoncrawl-data\n|  \u251c\u2500\u2500 CC-NEWS-20210911100000-00010.warc.gz\n|  \u251c\u2500\u2500 CC-NEWS-20210911100000-00010\n|  |  \u251c\u2500\u2500 warc-extract\n|  |  |  \u251c\u2500\u2500 www.pbs.org\n|  |  |  |  |\u2500\u2500 9c496b40-4344-4714-b50d-02a38b4f8028.json\n|  |  |  |  |\u2500\u2500 a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json\n|  |  |  \u251c\u2500\u2500 www.1news.co.nz\n|  |  |  |  |\u2500\u2500 01e5e008-3a39-43a0-a458-daa500782f97.json\n|  |  \u251c\u2500\u2500 processed-content\n|  |  |  \u251c\u2500\u2500 www.pbs.org\n|  |  |  |  |\u2500\u2500 9c496b40-4344-4714-b50d-02a38b4f8028.json\n|  |  |  |  |\u2500\u2500 a86d7283-8bd9-4afe-8fa9-798e4dbb2966.json\n|  |  |  \u251c\u2500\u2500 www.1news.co.nz\n|  |  |  |  |\u2500\u2500 01e5e008-3a39-43a0-a458-daa500782f97.json\n")),(0,r.kt)("p",null,"At this point all the articles in the downloaded WARC file would have been processed."),(0,r.kt)("p",null,"This data can now be used to build a search engine, or a news aggregator, or any other application that requires News data."))}h.isMDXComponent=!0}}]);