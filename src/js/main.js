// sync (dong bo) vs async (bat dong bo)

// trong js -> single thread

// dong bo : code chay , doi tra ve ket qua moi chay tiep

// bat dong bo : code chay, chua tra ve ket qua , dung code khac co the chay tiep

const users = [{ name: "A" }];

const getUser = () => {
  setTimeout(() => {
    console.log(users);
  }, 2000);
};

const addUser = (user) => {
  setTimeout(() => {
    users.push(user);
    resolve(`added new user : ${user.name}`);
  }, 4000);
};

const addUserPromise = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      let flag = false;
      if (flag) {
        resolve(`added new user : ${user.name}`);
      } else {
        reject("something wrong");
      }
    }, 4000);
  });
};

addUserPromise({ name: "B" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const url = "http://202.182.100.160:7000/api/todo/list";

const api = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
// fetchData(api)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const getData = async () => {
  try {
    const res = await fetchData(api);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData();
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     let result = "";
//     data.forEach((item) => {
//       result += `<li>${item.content}</li>`;
//     });
//     document.getElementsByTagName("ul")[0].innerHTML = result;
//   });

const getDataAwait = async () => {
  try {
    let res = await fetch(api);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getDataAwait();

// "use strict";

console.log({} > 0);

console.log(undefined >= 0);
