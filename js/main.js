$(initPage());

function initPage() {
    $('.btn-contact').click(onContact);
    renderPortfolio();
}

function renderPortfolio() {
    var portfolio = getPortfolio();
    var strPortfolioHtmls = portfolio.map(function (item, idx) {
        var strHtml = `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${item.thumbUrl}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${item.title}</h4>`
        item.labels.forEach(function (labelTxt) {
            strHtml += `<span class="badge badge-primary">${labelTxt}</span>`;
        })
        strHtml += `</div>
        </div>`
        return strHtml;
    });
    var strModalsHtmls = portfolio.map(function (item, idx) {
        return `<div class="portfolio-modal modal fade" id="portfolioModal${idx + 1}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <h2>${item.title}</h2>
                        <a href="${item.url}" target="_blank">Visit Site</a>
                        <img class="img-fluid d-block mx-auto" src="${item.fullImgUrl}" alt="">
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis
                        dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                        cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul class="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                        </ul>
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>`
    });
    $('.portfolio').html(strPortfolioHtmls);
    $('.modals').html(strModalsHtmls);
}

function onContact(ev) {
    ev.preventDefault();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shahar.mesh@gmail.com&su=${subject}&body=${message}`);
}