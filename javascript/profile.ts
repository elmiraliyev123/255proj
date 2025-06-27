const apiUrl = import.meta.env.VITE_API_URL;

import $ from "jquery";
import { eraseCookie, getCookie } from "./utils";
import type { User } from "./types";

$(async () => {
  const currentUserID = getCookie("self-id");

  const req = await fetch(`${apiUrl}/api/get_user/${currentUserID}`);
  const user: User = await req.json();

  $("#account-name-slot").html(`Hello, ${user.name}`);

  const imageHTML = /*html*/ `
  <img src="${apiUrl}/api/get_user_image/${user.id}" width="400"/> `;
  $("#account-image-slot").html(imageHTML);

  $("#date-of-birth-slot").html(
    new Date(user.birth_date * 1000).toDateString()
  );

  $("#name-slot").html(user.name);
  $("#surname-slot").html(user.surname);

  $("#log-out-button").on("click", () => {
    eraseCookie("self-id");
    eraseCookie("token");
    window.location.href = "/";
  });

  $("#bio-entry").val(user.bio);

  $("#bio-submit-button").on("click", async () => {
    const bioText = $("#bio-entry").val();
    await fetch(`${apiUrl}/api/set_bio/${user.id}`, {
      method: "POST",
      body: JSON.stringify({ bio: bioText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
});
