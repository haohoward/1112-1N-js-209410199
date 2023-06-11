const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='../demo/md/w01/w01_99.html' width="100%" height="100%"/>`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='../demo/md/w02/w02_99.html' width="100%" height="100%"/>`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='../demo//md/w03/w03_99.html' width="100%" height="100%"/>`;
      break;
    case 'w4':
      showDemo.innerHTML = `<iframe src='../demo/md/w04/w04_99.html' width="100%" height="100%"/>`;
      break;
    case 'w5':
      showDemo.innerHTML = `<iframe src='../demo/md/w05/w05_99.html' width="100%" height="100%"/>`;
      break;
    case 'w6-1':
      showDemo.innerHTML = `<iframe src='../demo/md/w06/w06_99.html' width="100%" height="100%"/>`;
      break;
    case 'w6-2':
      showDemo.innerHTML = `<iframe src='../demo/w06-array/p2_99/p2_99.html' width="100%" height="100%"/>`;
      break;
    case 'w6-3':
      showDemo.innerHTML = `<iframe src='../demo/md/w06/w06_99.html' width="100%" height="100%"/>`;
      break;
    case 'w7-1':
      showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_99/p1_bmi_99/p1_99.html' width="100%" height="100%"/>`;
      break;
    case 'w7-2':
      showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_99/p2_counter_99/index.html' width="100%" height="100%"/>`;
      break;
    case 'w7-3':
      showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_99/p3_tour_99/index.html' width="100%" height="100%"/>`;
      break;
    case 'w11':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
    case 'w11-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_99.html' width="100%" height="100%" />`;
      break;
    case 'w12':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
    case 'w12-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_99.html' width="100%" height="100%" />`;
      break;
    case 'w13':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
    case 'w13-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_99.html' width="100%" height="100%" />`;
      break;
    case 'w14':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
    case 'w714-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_99.html' width="100%" height="100%" />`;
      break;
    case 'w15':
      showDemo.innerHTML = `<iframe src='./demo/w15-stoe-product/index.html' width="100%" height="100%" />`;
      break;
    case 'w15-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w15/index.html' width="100%" height="100%" />`;
      break;
    case 'apiProject':
      showDemo.innerHTML = `<iframe src='./apiProject/api.md' width="100%" height="100%" />`;
      break;
    case 'apiProject-md':
      showDemo.innerHTML = `<iframe src='./apiProject/API.html' width="100%" height="100%" />`;
      break;
  }
};
