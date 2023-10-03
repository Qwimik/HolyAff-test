// save answers
const info = [];
$(document).ready(function () {
  $(".bq1").click(function (e) {
    if (!info.includes(e.target.textContent)) {
      info.push(e.target.textContent);
    }
  }),
    $(".bq2").click(function (e) {
      if (!info.includes(e.target.textContent)) {
        info.push(e.target.textContent);
      }
    }),
    $(".bq3").click(function (e) {
      if (!info.includes(e.target.textContent)) {
        info.push(e.target.textContent);
      }
    }),
    $(".bq4").click(function (e) {
      if (!info.includes(e.target.textContent)) {
        info.push(e.target.textContent);
      }
    }),
    $("#p_modal_button3").click(function () {
      console.log(info);
    });
});
//add comment

let commentValue, comment;
$(document).ready(function () {
  $("#commentBtn").click(function () {
    commentValue = $("#commentInput")[0].value;
    comment = `<div class="comments" style="display: block">
                <div class="profile">
                  <img src="./assets/images/unknown.webp" alt="" />
                </div>
                <div class="comment-content">
                  <p class="name">Unknown</p>
                  <p>${commentValue}</p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    Curte·comente
                    <img
                      src="./assets/images/like.png"
                      width="15"
                      height="15"
                      alt=""
                    />
                    0
                  </span>
                  <small>·
                    <u>agora mesmo</u>
                  </small>
                </div>
              </div>`;
    $("#commentInput")[0].value = "";
    if (commentValue && commentValue.length != 0) {
      $("#allComments")[0].insertAdjacentHTML("afterbegin", comment);
    }
  });
});
