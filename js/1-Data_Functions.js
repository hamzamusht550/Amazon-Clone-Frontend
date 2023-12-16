let allIDs = 0;

let breakLoopNum = 3; // This variable is only for _4Cards & _Single.
switch (true) {
	case (window.innerWidth > 620 && window.innerWidth < 820):
		breakLoopNum = 1;
		break;
}

const allSections = document.querySelector(".sections")
const secSmall = document.querySelector(".section-small")
const sec4Cards = document.querySelector(".section-4cards")
const secSingle = document.querySelector(".section-single")
const secScroll = document.querySelector(".section-scroll")
const secHotOffers = document.querySelector(".section-hotoffers")


// function ReplaceAll(str, FromReplace, ToReplace) {
// 	let strArr = str.split(FromReplace)
// 	// console.log(strArr)
// 	for (let i = 0; i < (strArr.length - 1); i++) {
// 		str = str.replace(FromReplace, ToReplace);
// 	}
// 	return str;
// }

String.prototype.ReplaceAll = function (FromReplace, ToReplace) {
    let strReplaced = this
    let strArr = strReplaced.split(FromReplace)
    for (let i = 0; i < (strArr.length - 1); i++) {
        strReplaced = strReplaced.replace(FromReplace, ToReplace);
    }
    return strReplaced;
}

// ---------------------------------------- section-small -----------------------------------------------------

function publishsmall(dataList, _dataListFolderName) {
dataList.forEach( (ele,i) => {

if (i === 0) {
	allSections.innerHTML += `
	<section class="sections-ch section-small _SECTION_ID_${allIDs}">
	</section>
	`
}

document.querySelector(`._SECTION_ID_${allIDs}`).innerHTML += `
<div class="card-small">
	<a href="javascript:void(0)">
		<div><h3>${ele.title}</h3></div>
		<div>
			<img class="card-small-img" alt="${i+1}" src="${InitialPath}${_dataListFolderName}/${i+1}.${ele.imgExt1}">
		</div>
	</a>
</div>
`;

} );
// console.log(allIDs);
allIDs++;
}

// ---------------------------------------- section-4cards -----------------------------------------------------

let _4CardsID = 0; // This variable is only for _4Cards.
function publish4cards(dataList, _dataListFolderName) {
dataList.forEach( (ele,i) => {
let imgNameSpacing1 = ele.imgName1.ReplaceAll("_"," ");
let imgNameSpacing2 = ele.imgName2.ReplaceAll("_"," ");
let imgNameSpacing3 = ele.imgName3.ReplaceAll("_"," ");
let imgNameSpacing4 = ele.imgName4.ReplaceAll("_"," ");

if (i === 0) {
	allSections.innerHTML += `
	<section class="sections-ch section-4cards _SECTION_ID_${allIDs}">
	</section>
	`
}

if (i <= breakLoopNum) {
document.querySelector(`._SECTION_ID_${allIDs}`).innerHTML += `
<div class="card card-1st">
	<div class="card-inner">
		<div class="card-inner-ch card-head">
			<h3>${ele.title}</h3>
		</div>
		<div class="card-inner-ch card-main">
			<div class="card-main-ch card-Upper">
				<div class="card-Upper-ch card-1">
					<a href="javascript:void(0)">
						<div>
							<img class="card-1-img" alt="${imgNameSpacing1}" src="${InitialPath}${_dataListFolderName}/${(i+1)+((breakLoopNum+1)*_4CardsID)}/${ele.imgName1}.${ele.imgExt1}">
						</div>
						<div class="card-Upper-1">
							<span class="card-text" >${imgNameSpacing1}</span>
						</div>
					</a>
				</div>
				<div class="card-Upper-ch card-1">
					<a href="javascript:void(0)">
						<div>
							<img class="card-1-img" alt="${imgNameSpacing2}" src="${InitialPath}${_dataListFolderName}/${(i+1)+((breakLoopNum+1)*_4CardsID)}/${ele.imgName2}.${ele.imgExt2}">
						</div>
						<div class="card-Upper-1">
							<span class="card-text" >${imgNameSpacing2}</span>
						</div>
					</a>
				</div>
			</div>
			<div class="card-main-ch card-lower">
				<div class="card-Upper-ch card-1">
					<a href="javascript:void(0)">
						<div>
							<img class="card-1-img" alt="${imgNameSpacing3}" src="${InitialPath}${_dataListFolderName}/${(i+1)+((breakLoopNum+1)*_4CardsID)}/${ele.imgName3}.${ele.imgExt3}">
						</div>
						<div class="card-Upper-1">
							<span class="card-text" >${imgNameSpacing3}</span>
						</div>
					</a>
				</div>
				<div class="card-Upper-ch card-1">
					<a href="javascript:void(0)">
						<div>
							<img class="card-1-img" alt="${imgNameSpacing4}" src="${InitialPath}${_dataListFolderName}/${(i+1)+((breakLoopNum+1)*_4CardsID)}/${ele.imgName4}.${ele.imgExt4}">
						</div>
						<div class="card-Upper-1">
							<span class="card-text" >${imgNameSpacing4}</span>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="card-inner-ch card-foot">
			<a class="card-description" href="javascript:void(0)">${ele.footer}</a>
		</div>
	</div>
</div>
`;
}

} );

dataList = dataList.map( (element, i) => { if (i <= breakLoopNum) {dataList.shift();} } )
// console.log(_4Cards)
// console.log(_4CardsID);
_4CardsID++;
// console.log(allIDs);
allIDs++;
}

// ---------------------------------------- section-single -----------------------------------------------------

let _SingleID = 0; // This variable is only for _Single.
function publishsingle(dataList, _dataListFolderName) {
dataList.forEach( (ele,i) => {

if (i === 0) {
	allSections.innerHTML += `
	<section class="sections-ch section-single _SECTION_ID_${allIDs}">
	</section>
	`
}

if (i <= breakLoopNum) {
document.querySelector(`._SECTION_ID_${allIDs}`).innerHTML += `
<div class="card card-2nd">
	<div class="card-inner">
		<div class="card-inner-ch card-head">
			<h3>${ele.title}</h3>
		</div>
		<div class="card-inner-ch card-main">
			<a href="javascript:void(0)">
				<div>
					<img class="card-2-img" alt="${(i+1)+((breakLoopNum+1)*_SingleID)}" src="${InitialPath}${_dataListFolderName}/${(i+1)+((breakLoopNum+1)*_SingleID)}.${ele.imgExt1}">
				</div>
			</a>
		</div>
		<div class="card-inner-ch card-foot">
			<a class="card-description" href="javascript:void(0)">${ele.footer}</a>
		</div>
	</div>
</div>
`;
}

} );

dataList = dataList.map( (element, i) => { if (i <= breakLoopNum) {dataList.shift();} } )
// console.log(_SingleCards)
// console.log(_SingleID++);
_SingleID++;
// console.log(allIDs);
allIDs++;
}

// ---------------------------------------- section-scroll -----------------------------------------------------

function publishscroll(dataList, _dataListFolderName, _Title) {
dataList.forEach( (ele,i) => {

if (i === 0) {
	allSections.innerHTML += `
	<section class="sections-ch section-scroll _SECTION_ID_${allIDs}">
		<h3 class="card-scroll-1st-head">${_Title}</h3>
		<button class="btnLeft btnLeft1 fa fa-chevron-left"></button>
		<button class="btnRight btnRight1 fa fa-chevron-right"></button>
		<div class="card-scroll-1st-wrapper">
			<div class="card-scroll-1st">
			</div>
		</div>
	</section>
	`;
}

document.querySelector(`._SECTION_ID_${allIDs} .card-scroll-1st`).innerHTML += `
<div class="card-scroll-1st-ch">
	<a href="javascript:void(0)">
		<div>
			<img class="card-scroll-1st-img" alt="${i+1}" src="${InitialPath}${_dataListFolderName}/${i+1}.jpg">
		</div>
	</a>
</div>
`;

} );
// console.log(allIDs);
allIDs++;
}

// ---------------------------------------- section-hotoffers -----------------------------------------------------

let truncDescription;
function publishhotoffers(dataList, _dataListFolderName, _Title) {
dataList.forEach( (ele,i) => {

if (i === 0) {
	allSections.innerHTML += `
	<section class="sections-ch section-hotoffers _SECTION_ID_${allIDs}">
		<h3 class="card-scroll-1st-head card-scroll-2nd-head">${_Title}</h3>
		<button class="btnLeft btnLeft2 fa fa-chevron-left"></button>
		<button class="btnRight btnRight2 fa fa-chevron-right"></button>
		<div class="card-scroll-1st-wrapper card-scroll-2nd-wrapper">
			<div class="card-scroll-1st card-scroll-2nd">
			</div>
		</div
	</section>
	`;
}


if (ele.Description.length > 30) {
	truncDescription = ele.Description.slice(0,30).concat("...")
} else {
	truncDescription = ele.Description
};
document.querySelector(`._SECTION_ID_${allIDs} .card-scroll-2nd`).innerHTML += `
<div class="card-scroll-1st-ch card-scroll-2nd-ch">
	<a href="javascript:void(0)">
		<div class="card-scroll-2nd-imgdiv">
			<img class="card-scroll-2nd-img" alt="${i+1}" src="${InitialPath}${_dataListFolderName}/${i+1}.jpg">
		</div>
		<div class="card-scroll-2nd-foot">
			<div class="desc1">
				<span class="how-much-off">${ele.Discount}% off</span><strong class="deal">Deal</strong>
			</div>
			<div class="desc2">
				<span class="price">$${ele.LessPrice}</span><span class="list-price">   List Price: <span class="list-price-line">$${ele.ORGPrice}</span>
				</span>
			</div>
			<div class="desc3">
				<span class="product-name">${truncDescription}</span>
			</div>
		</div>
	</a>
</div>
`;

} );
// console.log(allIDs);
allIDs++;
}

// ---------------------------------------- 5 -----------------------------------------------------


