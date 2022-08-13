const getData = async () => {
  let machinetable = document.getElementById("machinetable");
  let machineinfotab = document.getElementById("machineinfotab");

  try {
    const res = await fetch("./test.json");
    const data = await res.json();
    const [title, ...machineinfo] = data;

    for (let i = 0; i < title.length; i++) {
      let tabletitle = `${title[i]}`;

      let newtitle = tabletitle.split("_").join(" ");

      console.log(newtitle);

      let th = document.createElement("th");
      th.insertAdjacentText("afterbegin", newtitle);
      machinetable.append(th);
    }

    for (let i = 0; i < machineinfo.length; i++) {
      let tr = document.createElement("tr");
      tr.className = `${i}`;
      machineinfotab.append(tr);

      for (let j = machineinfo[tr.className].length - 1; j >= 0; j--) {
        let htmlcode = `<td> ${machineinfo[i][j]} </td>`;
        tr.insertAdjacentHTML("afterbegin", htmlcode);
      }
    }
  } catch (err) {
    console.log(`Error occured : ${err}`);
  }
};

getData();
