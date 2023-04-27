const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%" />`;
      break;
    case 'w1-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_99.html' width="100%" height="100%" />`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_99.html' width="100%" height="100%" />`;
      break;
    case 'w2-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_99.html' width="100%" height="100%" />`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='./demo/w03-review/' width="100%" height="100%" />`;
      break;
    case 'w3-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_99.html' width="100%" height="100%" />`;
      break;
    case 'w4':
      showDemo.innerHTML = `<iframe src='./demo/w04-menu/' width="100%" height="100%" />`;
      break;
    case 'w4-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_99.html' width="100%" height="100%" />`;
      break;
    case 'w5-menu':
      showDemo.innerHTML = `<iframe src='./demo/w05-menu/' width="100%" height="100%" />`;
      break;
    case 'w5-modal':
      showDemo.innerHTML = `<iframe src='./demo/w05-modal/v1/' width="100%" height="100%" />`;
      break;
    case 'w5-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_99.html' width="100%" height="100%" />`;
      break;
    case 'w6-p3':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
    case 'w6-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_99.html' width="100%" height="100%" />`;
      break;
    case 'w9-p1':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p1_bmi_99/p1_99.html' width="100%" height="100%" />`;
      break;
    case 'w9-p2':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p2_counter_99/' width="100%" height="100%" />`;
      break;
    case 'w9-p3':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p3_tour_99/' width="100%" height="100%" />`;
      break;
    case 'w9-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_99.html' width="100%" height="100%" />`;
      break;

    case 'mid-p1':
      showDemo.innerHTML = `<iframe src='../midterm_99/p1_99/p1_99.html' width="100%" height="100%" />`;
      break;
    case 'mid-p2':
      showDemo.innerHTML = `<iframe src='../midterm_99/p2_99/p2_99.html' width="100%" height="100%" />`;
      break;
    case 'mid-p3':
      showDemo.innerHTML = `<iframe src='../midterm_99/p3_99/p3_99.html' width="100%" height="100%" />`;
      break;
  }
};
