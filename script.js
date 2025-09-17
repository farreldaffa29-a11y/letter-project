const message = `hii dilaaa sayanggg.\nakuu farrel daffa athaya ryantama disini aku buat inii karena aku mau berterimakasih ke kamuu.\n\n karena udaa nerimaa aku yang masih belum punyaa apa", tapi aku akan selalu mengusahakan buat kamu dill.\n\nmungkin menurutmu ini terlau cept tapi aku benar" serius dengan kamu dan omongan ini akan aku pastikan jika kita udaa lulus nanti (asek)\n\nudaa wes yaa dibacaa yaaa love uuuu sayangkuu maaf ini asline UALAYYYY TAPI LUCU AE MAKANE TAK BUAT.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

