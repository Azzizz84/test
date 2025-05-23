var dummyUserImage = "assets/images/users/user-dummy-img.jpg",
  dummyMultiUserImage = "assets/images/users/multi-user.jpg",
  isreplyMessage = !1;
Array.from(document.querySelectorAll(".favourite-btn")).forEach(function (e) {
  e.addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
});
var userChatElement = document.getElementsByClassName("user-chat");
Array.from(document.querySelectorAll(".chat-user-list li a")).forEach(function (
  e
) {
  e.addEventListener("click", function (e) {
    Array.from(userChatElement).forEach(function (e) {
      e.classList.add("user-chat-show");
    });
    var t = document.querySelector(".chat-user-list li.active");
    t && t.classList.remove("active"), this.parentNode.classList.add("active");
  });
}),
  Array.from(document.querySelectorAll(".user-chat-remove")).forEach(function (
    e
  ) {
    e.addEventListener("click", function (e) {
      Array.from(userChatElement).forEach(function (e) {
        e.classList.remove("user-chat-show");
      });
    });
  });
var lightbox = GLightbox({ selector: ".popup-img", title: !1 }),
  currentChatId = "users-chat";
function scrollToBottom(r) {
  setTimeout(function () {
    var e = document
        .getElementById(r)
        .querySelector("#chat-conversation .simplebar-content-wrapper")
        ? document
            .getElementById(r)
            .querySelector("#chat-conversation .simplebar-content-wrapper")
        : "",
      t = document.getElementsByClassName("chat-conversation-list")[0]
        ? document
            .getElementById(r)
            .getElementsByClassName("chat-conversation-list")[0].scrollHeight -
          window.innerHeight +
          335
        : 0;
    t && e.scrollTo({ top: t, behavior: "smooth" });
  }, 100);
}
scrollToBottom(currentChatId);
var chatForm = document.querySelector("#chatinput-form"),
  chatInput = document.querySelector("#chat-input"),
  chatInputfeedback = document.querySelector(".chat-input-feedback");
function currentTime() {
  var e = 12 <= new Date().getHours() ? "pm" : "am",
    t =
      12 < new Date().getHours()
        ? new Date().getHours() % 12
        : new Date().getHours(),
    r =
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes();
  return t < 10 ? "0" + t + ":" + r + " " + e : t + ":" + r + " " + e;
}
setInterval(currentTime, 1e3);
var messageIds = 0;
chatForm &&
  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = currentChatId,
      r = currentChatId,
      e = chatInput.value;
    0 === e.length
      ? (chatInputfeedback.classList.add("show"),
        setTimeout(function () {
          chatInputfeedback.classList.remove("show");
        }, 2e3))
      : (1 == isreplyMessage
          ? (getReplyChatList(r, e), (isreplyMessage = !1))
          : getChatList(t, e),
        scrollToBottom(t || r)),
      (chatInput.value = ""),
      document.getElementById("close_toggle").click();
  }),
  Array.from(document.querySelectorAll("#userList li")).forEach(function (r) {
    r.addEventListener("click", function () {
      var e = r.querySelector(".text-truncate").innerHTML,
        t = r.querySelector(".avatar-xxs .userprofile").getAttribute("src");
      (document.querySelector(
        ".user-chat-topbar .text-truncate .username"
      ).innerHTML = e),
        (document.querySelector(".profile-offcanvas .username").innerHTML = e),
        t
          ? (document
              .querySelector(".user-chat-topbar .avatar-xs")
              .setAttribute("src", t),
            document
              .querySelector(".profile-offcanvas .avatar-lg")
              .setAttribute("src", t))
          : (document
              .querySelector(".user-chat-topbar .avatar-xs")
              .setAttribute("src", dummyUserImage),
            document
              .querySelector(".profile-offcanvas .avatar-lg")
              .setAttribute("src", dummyUserImage));
      e = document.getElementById("users-conversation");
      Array.from(e.querySelectorAll(".left .chat-avatar")).forEach(function (
        e
      ) {
        t
          ? e.querySelector("img").setAttribute("src", t)
          : e.querySelector("img").setAttribute("src", dummyUserImage);
      });
    });
  }),
  Array.from(document.querySelectorAll("#channelList li")).forEach(function (
    t
  ) {
    t.addEventListener("click", function () {
      var e = t.querySelector(".text-truncate").innerHTML;
      (document.querySelector(
        ".user-chat-topbar .text-truncate .username"
      ).innerHTML = e),
        (document.querySelector(".profile-offcanvas .username").innerHTML = e),
        document
          .querySelector(".user-chat-topbar .avatar-xs")
          .setAttribute("src", dummyMultiUserImage),
        document
          .querySelector(".profile-offcanvas .avatar-lg")
          .setAttribute("src", dummyMultiUserImage);
      e = document.getElementById("users-conversation");
      Array.from(e.querySelectorAll(".left .chat-avatar")).forEach(function (
        e
      ) {
        e.querySelector("img").setAttribute("src", dummyUserImage);
      });
    });
  });
// var itemList = document.querySelector(".chat-conversation-list"),
//   copyMessage = itemList.querySelectorAll(".copy-message");
// Array.from(copyMessage).forEach(function (t) {
//   t.addEventListener("click", function () {
//     var e = t.closest(".ctext-wrap").children[0]
//       ? t.closest(".ctext-wrap").children[0].children[0].innerText
//       : "";
//     navigator.clipboard.writeText(e);
//   });
// }),
//   (document.getElementById("copyClipBoard").style.display = "none");
// var copyClipboardAlert = document.querySelectorAll(".copy-message");
// Array.from(copyClipboardAlert).forEach(function (e) {
//   e.addEventListener("click", function () {
//     (document.getElementById("copyClipBoard").style.display = "block"),
//       setTimeout(function () {
//         document.getElementById("copyClipBoard").style.display = "none";
//       }, 1e3);
//   });
// });
// var deleteItems = itemList.querySelectorAll(".delete-item");
// Array.from(deleteItems).forEach(function (e) {
//   e.addEventListener("click", function () {
//     (2 == e.closest(".user-chat-content").childElementCount
//       ? e.closest(".chat-list")
//       : e.closest(".ctext-wrap")
//     ).remove();
//   });
// });
// var deleteImage = itemList.querySelectorAll(".chat-list");
// Array.from(deleteImage).forEach(function (e) {
//   Array.from(e.querySelectorAll(".delete-image")).forEach(function (e) {
//     e.addEventListener("click", function () {
//       (1 == e.closest(".message-img").childElementCount
//         ? e.closest(".chat-list")
//         : e.closest(".message-img-list")
//       ).remove();
//     });
//   });
// });
// var replyMessage = itemList.querySelectorAll(".reply-message"),
//   replyToggleOpen = document.querySelector(".replyCard"),
//   replyToggleClose = document.querySelector("#close_toggle");
// Array.from(replyMessage).forEach(function (t) {
//   t.addEventListener("click", function () {
//     (isreplyMessage = !0),
//       replyToggleOpen.classList.add("show"),
//       replyToggleClose.addEventListener("click", function () {
//         replyToggleOpen.classList.remove("show");
//       });
//     var e = t.closest(".ctext-wrap").children[0].children[0].innerText;
//     document.querySelector(
//       ".replyCard .replymessage-block .flex-grow-1 .mb-0"
//     ).innerText = e;
//     (e = document.querySelector(
//       ".user-chat-topbar .text-truncate .username"
//     ).innerHTML),
//       (e =
//         !t.closest(".chat-list") ||
//         t.closest(".chat-list").classList.contains("left")
//           ? e
//           : "You");
//     document.querySelector(
//       ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
//     ).innerText = e;
//   });
// });
// var getChatList = function (e, t) {
//     messageIds++;
//     var r = document.getElementById(e).querySelector(".chat-conversation-list");
//     null != t &&
//     r.insertAdjacentHTML(
//       "beforeend",
//       '<li class="chat-list right" id="chat-list-' + messageIds + '"> \
//         <div class="conversation-list"> \
//           <div class="user-chat-content"> \
//             <div class="ctext-wrap"> \
//               <div class="ctext-wrap-content"> \
//                 <p class="mb-0 ctext-content">' + t + '</p> \
//               </div> \
//               <div class="dropdown align-self-start message-box-drop"> \
//                 <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
//                   <i class="ri-more-2-fill"></i> \
//                 </a> \
//                 <div class="dropdown-menu"> \
//                   <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' + messageIds + '">Copy <i class="bx bx-copy text-muted ms-2"></i></a> \
//                   <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' + messageIds + '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a> \
//                 </div> \
//               </div> \
//             </div> \
//             <div class="conversation-name"> \
//               <small class="text-muted time">' + currentTime() + '</small> \
//               <span class="text-success check-message-icon"><i class="bx bx-check"></i></span> \
//             </div> \
//           </div> \
//         </div> \
//       </li>'
//     );
//     var s = document.getElementById("chat-list-" + messageIds);
//     Array.from(s.querySelectorAll(".delete-item")).forEach(function (e) {
//       e.addEventListener("click", function () {
//         r.removeChild(s);
//       });
//     }),
//       Array.from(s.querySelectorAll(".copy-message")).forEach(function (e) {
//         e.addEventListener("click", function () {
//           var e =
//             s.childNodes[1].firstElementChild.firstElementChild
//               .firstElementChild.firstElementChild.innerText;
//           navigator.clipboard.writeText(e);
//         });
//       }),
//       Array.from(s.querySelectorAll(".copy-message")).forEach(function (e) {
//         e.addEventListener("click", function () {
//           (document.getElementById("copyClipBoard").style.display = "block"),
//             setTimeout(function () {
//               document.getElementById("copyClipBoard").style.display = "none";
//             }, 1e3);
//         });
//       }),
//       Array.from(s.querySelectorAll(".reply-message")).forEach(function (a) {
//         a.addEventListener("click", function () {
//           var e = document.querySelector(".replyCard"),
//             t = document.querySelector("#close_toggle"),
//             r = a.closest(".ctext-wrap").children[0].children[0].innerText,
//             s = document.querySelector(
//               ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
//             ).innerHTML;
//           (isreplyMessage = !0),
//             e.classList.add("show"),
//             t.addEventListener("click", function () {
//               e.classList.remove("show");
//             });
//           s =
//             !a.closest(".chat-list") ||
//             a.closest(".chat-list").classList.contains("left")
//               ? s
//               : "You";
//           (document.querySelector(
//             ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
//           ).innerText = s),
//             (document.querySelector(
//               ".replyCard .replymessage-block .flex-grow-1 .mb-0"
//             ).innerText = r);
//         });
//       });
//   },
//   messageboxcollapse = 0,
//   getReplyChatList = function (e, t) {
//     var r = document.querySelector(
//         ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
//       ).innerHTML,
//       s = document.querySelector(
//         ".replyCard .replymessage-block .flex-grow-1 .mb-0"
//       ).innerText;
//     messageIds++;
//     e = document.getElementById(e).querySelector(".chat-conversation-list");
//     null != t &&
//       (e.insertAdjacentHTML(
//         "beforeend",
//         '<li class="chat-list right" id="chat-list-' +
//           messageIds +
//           '" >                <div class="conversation-list">                    <div class="user-chat-content">                        <div class="ctext-wrap">                            <div class="ctext-wrap-content">                            <div class="replymessage-block mb-0 d-flex align-items-start">                        <div class="flex-grow-1">                            <h5 class="conversation-name">' +
//           r +
//           '</h5>                            <p class="mb-0">' +
//           s +
//           '</p>                        </div>                        <div class="flex-shrink-0">                            <button type="button" class="btn btn-sm btn-link mt-n2 me-n3 font-size-18">                            </button>                        </div>                    </div>                                <p class="mb-0 ctext-content mt-1">                                    ' +
//           t +
//           '                                </p>                            </div>                            <div class="dropdown align-self-start message-box-drop">                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                    <i class="ri-more-2-fill"></i>                                </a>                                <div class="dropdown-menu">                                    <a class="dropdown-item d-flex align-items-center justify-content-between reply-message" href="#" data-bs-toggle="collapse"  data-bs-target=".replyCollapse">Reply <i class="bx bx-share ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">Forward <i class="bx bx-share-alt ms-2 text-muted"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between copy-message" href="#" id="copy-message-' +
//           messageIds +
//           '">Copy <i class="bx bx-copy text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Mark as Unread <i class="bx bx-message-error text-muted ms-2"></i></a>                                    <a class="dropdown-item d-flex align-items-center justify-content-between delete-item" id="delete-item-' +
//           messageIds +
//           '" href="#">Delete <i class="bx bx-trash text-muted ms-2"></i></a>                            </div>                        </div>                    </div>                    <div class="conversation-name">                        <small class="text-muted time">' +
//           currentTime() +
//           '</small>                        <span class="text-success check-message-icon"><i class="bx bx-check"></i></span>                    </div>                </div>            </div>        </li>'
//       ),
//       messageboxcollapse++);
//     var a = document.getElementById("chat-list-" + messageIds);
//     Array.from(a.querySelectorAll(".delete-item")).forEach(function (e) {
//       e.addEventListener("click", function () {
//         itemList.removeChild(a);
//       });
//     }),
//       Array.from(a.querySelectorAll(".copy-message")).forEach(function (e) {
//         e.addEventListener("click", function () {
//           (document.getElementById("copyClipBoard").style.display = "block"),
//             (document.getElementById("copyClipBoardChannel").style.display =
//               "block"),
//             setTimeout(function () {
//               (document.getElementById("copyClipBoard").style.display = "none"),
//                 (document.getElementById("copyClipBoardChannel").style.display =
//                   "none");
//             }, 1e3);
//         });
//       }),
//       Array.from(a.querySelectorAll(".reply-message")).forEach(function (r) {
//         r.addEventListener("click", function () {
//           var e = r.closest(".ctext-wrap").children[0].children[0].innerText,
//             t = document.querySelector(
//               ".user-chat-topbar .text-truncate .username"
//             ).innerHTML;
//           document.querySelector(
//             ".replyCard .replymessage-block .flex-grow-1 .mb-0"
//           ).innerText = e;
//           t =
//             !r.closest(".chat-list") ||
//             r.closest(".chat-list").classList.contains("left")
//               ? t
//               : "You";
//           document.querySelector(
//             ".replyCard .replymessage-block .flex-grow-1 .conversation-name"
//           ).innerText = t;
//         });
//       }),
//       Array.from(a.querySelectorAll(".copy-message")).forEach(function (e) {
//         e.addEventListener("click", function () {
//           a.childNodes[1].children[1].firstElementChild.firstElementChild.getAttribute(
//             "id"
//           ),
//             (isText =
//               a.childNodes[1].children[1].firstElementChild.firstElementChild
//                 .innerText),
//             navigator.clipboard.writeText(isText);
//         });
//       });
//   },
//   emojiPicker = new FgEmojiPicker({
//     trigger: [".emoji-btn"],
//     removeOnSelection: !1,
//     closeButton: !0,
//     position: ["top", "right"],
//     preFetch: !0,
//     dir: "assets/js/pages/plugins/json",
//     insertInto: document.querySelector(".chat-input"),
//   }),
//   emojiBtn = document.getElementById("emoji-btn");
// function searchMessages() {
//   var t,
//     r = document.getElementById("searchMessage").value.toUpperCase(),
//     e = document
//       .getElementById("users-conversation")
//       .getElementsByTagName("li");
//   Array.from(e).forEach(function (e) {
//     (t = e.getElementsByTagName("p")[0] ? e.getElementsByTagName("p")[0] : ""),
//       -1 <
//       (t.textContent || t.innerText ? t.textContent || t.innerText : "")
//         .toUpperCase()
//         .indexOf(r)
//         ? (e.style.display = "")
//         : (e.style.display = "none");
//   });
// }
// emojiBtn.addEventListener("click", function () {
//   setTimeout(function () {
//     var e,
//       t = document.getElementsByClassName("fg-emoji-picker")[0];
//     !t ||
//       ((e = window.getComputedStyle(t)
//         ? window.getComputedStyle(t).getPropertyValue("left")
//         : "") &&
//         ((e = e.replace("px", "")), (t.style.left = e = e - 40 + "px")));
//   }, 0);
// });
