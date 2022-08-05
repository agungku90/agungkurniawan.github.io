/*** Comments:  */
function thisFilePath() {
    let currhref = window.location.href;
    let filePath = currhref.substring(0, currhref.lastIndexOf("/"));
    return filePath;
}

const thisLoc = thisFilePath();

// Get Navbar
async function loadNavbar() {
    let navComponent = document.querySelector(".navbar-component")
    if (navComponent) {
        document.querySelector(".navbar-component").innerHTML = await (await fetch(thisLoc + '/navbar.html')).text();
        setActiveLink();
    }
}

// Get Footer
async function loadFooter() {
    let fooComponent = document.querySelector(".footer-component")
    if (fooComponent) {
        document.querySelector(".footer-component").innerHTML = await (await fetch(thisLoc + '/footer.html')).text();
        quickSnap();
    }
}

function setActiveLink() {
    //console.log("window.location.href => ", window.location.href);
    let thisResFile = window.location.pathname.split("/").pop().split("#")[0].trim();

    let navLinks = document.querySelectorAll("nav .navbar-nav .nav-link");

    for (oneNavLink of navLinks) {

        let currResFile = oneNavLink.href.split("/").pop().trim();

        if (thisResFile === "" && (oneNavLink.href === "#" || currResFile === "index.html")) {
            oneNavLink.classList.add("active");
            break;
        }

        if (thisResFile === currResFile) {
            oneNavLink.classList.add("active");
            break;
        }

    }
}

function quickSnap() {
    let quickSnapModal = document.getElementById('show-quick-snap')
    quickSnapModal.addEventListener('show.bs.modal', function (event) {

        let link = event.relatedTarget;
        let urlLink = link.getAttribute('data-informer');
        let orgTo = link.getAttribute('data-informer-id');

        let modalBody = quickSnapModal.querySelector('.modal-body p');

        modalBody.innerHTML = `
        <h5> You are moving to <b>${orgTo}</b>, Click on Link below to Open the Web App </h5>
            <a href="${urlLink}" target="_blank">${urlLink}</a>
        `;

    });
}

/** Generate Awards & Certification */

let certificates_details = [
    {
        "org_id": "BNSP",
        "org_name": "BNSP - Programmer",
        "org_desc": "BNSP adalah dalah sebuah lembaga independen yang dibentuk pemerintah untuk melaksanakan ketentuan Pasal 18 ayat (5) Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan. Badan ini bekerja untuk menjamin mutu kompetensi dan pengakuan tenaga kerja pada seluruh sektor bidang profesi di Indonesia melalui proses sertifikasi kompetensi kerja bagi tenaga kerja, baik yang berasal dari lulusan pelatihan kerja maupun dari pengalaman kerja.",
        "org_url": "https://bnsp.go.id/",
        "org_logo": "images/certs/iconbnsp_kecil.png",
        "org_certs": [
            "images/certs/bnsp.jpg",
        ]
    },
    {
        "org_id": "dicoding",
        "org_name": "Dicoding - Javascript",
        "org_desc": "Dicoding merupakan sebuah platform bagi developer Indonesia untuk belajar, membuat karya digital, meraih validasi industri atas karya tersebut, serta mencari pekerjaan di perusahaan mitra. Dicoding menawarkan developer journey yang utuh, dimulai dari Academy. Developer yang ingin belajar pemrograman dapat mengikuti kelas di Academy, pilar utama kami.",
        "org_url": "https://www.dicoding.com/",
        "org_logo": "images/certs/new-ui-logo.png",
        "org_certs": [
            "images/certs/dicodingjs.jpg",
            "images/certs/dicodingjs1.jpg",
            "images/certs/dicodingjs3.jpg"
        ]
    },
    {
        "org_id": "dicodingaws",
        "org_name": "Dicoding - AWS",
        "org_desc": "Dicoding merupakan sebuah platform bagi developer Indonesia untuk belajar, membuat karya digital, meraih validasi industri atas karya tersebut, serta mencari pekerjaan di perusahaan mitra. Dicoding menawarkan developer journey yang utuh, dimulai dari Academy. Developer yang ingin belajar pemrograman dapat mengikuti kelas di Academy, pilar utama kami.",
        "org_url": "https://www.dicoding.com/",
        "org_logo": "images/certs/new-ui-logo.png",
        "org_certs": [
            "images/certs/dicodingaws.jpg",
            "images/certs/dicodingaws1.jpg",
            "images/certs/dicodingaws3.jpg"
        ]
    },
     {
        "org_id": "BNSPoffice",
        "org_name": "BNSP - Practical Office Advance",
        "org_desc": "BNSP adalah dalah sebuah lembaga independen yang dibentuk pemerintah untuk melaksanakan ketentuan Pasal 18 ayat (5) Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan. Badan ini bekerja untuk menjamin mutu kompetensi dan pengakuan tenaga kerja pada seluruh sektor bidang profesi di Indonesia melalui proses sertifikasi kompetensi kerja bagi tenaga kerja, baik yang berasal dari lulusan pelatihan kerja maupun dari pengalaman kerja.",
        "org_url": "https://bnsp.go.id/",
        "org_logo": "images/certs/iconbnsp_kecil.png",
        "org_certs": [
            "images/certs/office.jpg",
        ]
    },
    {
        "org_id": "arkademi",
        "org_name": "Arkademi - Scrum",
        "org_desc": "Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.",
        "org_url": "https://arkademi.com/",
        "org_logo": "images/certs/arkademi.jpeg",
        "org_certs": [
            "images/certs/scurm.jpg",
        ]
    },

   


]

function builtCertSection(certificates_details) {

    let selectonList = "";
    let dataContentList = "";
    let activer = "active"

    for (let oneCertSection of certificates_details) {

        if (selectonList !== "") { activer = ""; }
        tempData = generateOneCertSection(oneCertSection, activer);
        tempSelectonList = tempData[0];
        tempDataContentList = tempData[1];

        selectonList = selectonList + tempSelectonList;
        dataContentList = dataContentList + tempDataContentList;

    }

    let fullCertSection = `    
        <div class="row row-gap-40">
            <div class="col-lg-7" style="padding-right: 20px; position: relative;">
                <div class="list-group certs-list" id="list-tab" role="tablist">
                    ${selectonList}
                </div>
            </div>
            <div class="col-lg-5">
                <div class="tab-content certs-slide-show" id="nav-tabContent" style="padding-top: 10px;">
                    ${dataContentList}
                </div>
            </div>
        </div>
    `

    /** Need to Revisit */
    let certificationsSection = document.querySelector("CertSection");
    certificationsSection.innerHTML = fullCertSection;


    function generateOneCertSection(oneCert, activer) {

        let oneSelectorList = `
            <a class="list-group-item list-group-item-action ${activer} d-flex gap-3 py-3" aria-current="true" id="${oneCert.org_id}-tab" data-bs-toggle="list" href="#list-${oneCert.org_id}-certs" role="tab" aria-controls="list-home">
                <img src="${oneCert.org_logo}" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0 bg-dark">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h5 class="mb-1">${oneCert.org_name}</h5>
                        <p class="mb-0 opacity-75">${oneCert.org_desc}</p>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-secondary shadow" data-bs-toggle="modal" data-bs-target="#show-quick-snap" data-informer="${oneCert.org_url}" data-informer-id="${oneCert.org_name}" style="position: absolute; right: -15px;">
                            Visit
                            <img src="./images/svg/link_white.svg" alt="">
                        </button>
                    </div>
                </div>
            </a>
        `;

        let imgBtns = generateBtnList(oneCert.org_certs, oneCert.org_id);

        let oneTabContent = `
            <div class="tab-pane fade show ${activer}" id="list-${oneCert.org_id}-certs" role="tabpanel" aria-labelledby="${oneCert.org_id}-tab">
                <div id="carousel-${oneCert.org_id}-certs" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">                                
                    ${imgBtns}               
                    <div class="carousel-inner">                                                
                        ${getCertImage(oneCert.org_certs)}                                             
                    </div>                
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${oneCert.org_id}-certs"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>                
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${oneCert.org_id}-certs"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>                
                </div>
            </div>
        `;

        return [oneSelectorList, oneTabContent]

    }

    function getCertImage(certImgList) {

        let imgList = "";
        let activer = "active"

        for (let oneCertImg of certImgList) {
            if (imgList !== "") { activer = ""; }
            let tempImgList = `
                <div class="carousel-item ${activer}">
                    <div class="card text-dark card-transparent shadow-none bg-grey">
                        <img src="${oneCertImg}" class="card-img-top" alt="...">
                    </div>
                </div>
            `
            imgList = imgList + tempImgList;
        }

        return imgList;
    }

    function generateBtnList(certImgList, org_id) {

        let allBtnList = "";
        let activer = `class="active" aria-current="true"`;

        for (let oneBtn in certImgList) {
            if (allBtnList !== "") { activer = ""; }
            let tempData = `<button type="button" data-bs-target="#carousel-${org_id}-certs" data-bs-slide-to="${oneBtn}" ${activer} aria-label="Slide ${oneBtn}"></button>`
            allBtnList = allBtnList + tempData;
        }

        return `
            <div class="carousel-indicators">
            ${allBtnList}
            </div>
        `
    }


}

function main() {
    loadNavbar();
    loadFooter();
    builtCertSection(certificates_details);
}

main();