const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='../demo/md/w01/w01_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='../demo/md/w02/w02_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='../demo//md/w03/w03_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w4':
      showDemo.innerHTML = `<iframe src='../demo/md/w04/w04_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w5':
      showDemo.innerHTML = `<iframe src='../demo/md/w05/w05_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w6-1':
      showDemo.innerHTML = `<iframe src='../demo/md/w06/w06_xx.html' width="100%" height="100%"/>`;
      break;
    case 'w6-2':
      showDemo.innerHTML = `<iframe src='../demo/w06-array/p2_99/p2_99.html' width="100%" height="100%"/>`;
      break;
    case 'w6-3':
      showDemo.innerHTML = `<iframe src='../demo/md/w06/w06_xx.html' width="100%" height="100%"/>`;
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
  }
};
