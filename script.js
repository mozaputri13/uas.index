function cekJawaban() {
    let skor = 0;

    const jawabanBenar = {
        q1: "a",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b"
    };

    for (let soal in jawabanBenar) {
        const pilihan = document.querySelector(`input[name="${soal}"]:checked`);
        if (!pilihan) {
            alert("Harap jawab semua soal!");
            return;
        }
        if (pilihan.value === jawabanBenar[soal]) {
            skor += 20;
        }
    }

    let hasil = skor >= 70 ? "LULUS 🎉" : "TIDAK LULUS ❌";

    document.getElementById("result").innerHTML =
        `Skor Anda: ${skor}<br>Status: ${hasil}`;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}