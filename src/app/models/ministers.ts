export interface Minister {
  image: string;
  state: string;
  constituency: string;
  name: string;
  party: string;
  age: string;
  qual: string;
  edu: string;
  criminalRecord: string;
}

export const MINISTERS = {
  'm-an1': {image: '../assets/images/m1.jpg',id: 'm-an1', state: 'AN', constituency: 'Andaman and Nicobar Islands', name: 'Bishnu Pada Ray', party: 'Bharatiya Janata Party', age: '68', qual: 'Graduate', edu: 'B.Com. (Hons.); Educated at Andamohan College, Calcutta, West Bengal', criminalRecord: '0'},
'm-ap1': {image: '../assets/images/m1.jpg',id: 'm-ap1', state: 'AP', constituency: 'Amalapuram', name: 'Pandula Ravindra Babu', party: 'Telugu Desam Party', age: '62', qual: 'Professional Graduate', edu: 'M.B.B.S.', criminalRecord: '0'},
'm-ap2': {image: '../assets/images/m1.jpg', id: 'm-ap2', state: 'AP', constituency: 'Anakapalli', name: 'Muttamsetti Srinivasa Rao (Avanthi)', party: 'Telugu Desam Party', age: '51', qual: 'Inter/ Higher Secondary', edu: 'Higher Secondary (B.Com.)', criminalRecord: '0'},
'm-ap3': {id: 'm-ap3', state: 'AP', constituency: 'Anantapur', name: 'J.C. Divakar Reddi', party: 'Telugu Desam Party', age: '74', qual: 'Graduate', edu: 'B.Sc.', criminalRecord: '0'},
'm-ap4': {id: 'm-ap4', state: 'AP', constituency: 'Araku', name: 'Kothapalli Geetha', party: 'Yuvajana Sramika Rythu Congress Party', age: '47', qual: 'Post Graduate', edu: 'M.A.(Pub. Ad., Sociology)', criminalRecord: '0'},
'm-ap5': {id: 'm-ap5', state: 'AP', constituency: 'Bapatla', name: 'Malyadri Sriram', party: 'Telugu Desam Party', age: '64', qual: 'Post Graduate', edu: 'M.A(Economics)', criminalRecord: '0'},
'm-ap6': {id: 'm-ap6', state: 'AP', constituency: 'Chittoor', name: 'Naramalli Sivaprasad', party: 'Telugu Desam Party', age: '67', qual: 'Professional Graduate', edu: 'M.B.B.S.; Educated at S.V. Medical College, Tirupati, Chittoor (Andhra Pradesh) ', criminalRecord: '0'},
'm-ap7': {id: 'm-ap7', state: 'AP', constituency: 'Eluru', name: 'Maganti Venkateswara Rao (Babu)', party: 'Telugu Desam Party', age: '58', qual: 'Graduate', edu: 'B.A.', criminalRecord: '0'},
'm-ap8': {id: 'm-ap8', state: 'AP', constituency: 'Guntur', name: 'Jayadev Galla', party: 'Telugu Desam Party', age: '52', qual: 'Graduate', edu: 'Graduate', criminalRecord: '0'},
'm-ap9': {id: 'm-ap9', state: 'AP', constituency: 'Hindupur', name: 'Kristappa Nimmala', party: 'Telugu Desam Party', age: '61', qual: 'Graduate', edu: 'B.Com.; Educated at Osmania College, Kurnool', criminalRecord: '0'},
'm-ap10': {id: 'm-ap10', state: 'AP', constituency: 'Kadapa', name: 'Y.S. Avinash Reddy', party: 'Yuvajana Sramika Rythu Congress Party', age: '33', qual: 'Professional Post Graduate', edu: 'B.Tech, M.B.A.', criminalRecord: '0'},
'm-ap11': {id: 'm-ap11', state: 'AP', constituency: 'Kakinada', name: 'Thota Narasimham', party: 'Telugu Desam Party', age: '56', qual: 'Graduate', edu: 'B.Com, ICWAI', criminalRecord: '0'},
'm-ap12': {id: 'm-ap12', state: 'AP', constituency: 'Kurnool', name: 'Butta Renuka', party: 'Yuvajana Sramika Rythu Congress Party', age: '47', qual: 'Inter/ Higher Secondary', edu: 'Higher Secondary', criminalRecord: '0'},
'm-ap13': {id: 'm-ap13', state: 'AP', constituency: 'Machilipatnam', name: 'Konakalla Narayana Rao', party: 'Telugu Desam Party', age: '68', qual: 'Inter/ Higher Secondary', edu: '', criminalRecord: '0'},
'm-ap14': {id: 'm-ap14', state: 'AP', constituency: 'Nandyal', name: 'S.P.Y. Reddy', party: 'Yuvajana Sramika Rythu Congress Party', age: '68', qual: 'Professional Graduate', edu: 'B.E. (Mechanical); Educated at Reginal Engg. College, Warangal (Andhra Pradesh) ', criminalRecord: '0'},
'm-ap15': {id: 'm-ap15', state: 'AP', constituency: 'Narasaraopet', name: 'Sambasiva Rayapati Rao', party: 'Telugu Desam Party', age: '75', qual: 'Graduate', edu: 'B.Sc.; Educated at New Science College, Hyderabad, Andhra Pradesh', criminalRecord: '0'},
'm-ap16': {id: 'm-ap16', state: 'AP', constituency: 'Narsapuram', name: 'Gokaraju Ganga Raju', party: 'Bharatiya Janata Party', age: '74', qual: 'Graduate', edu: 'B.Pharma', criminalRecord: '0'},
'm-ap17': {id: 'm-ap17', state: 'AP', constituency: 'Nellore', name: 'Mekapati Rajamohan Reddy', party: 'Yuvajana Sramika Rythu Congress Party', age: '74', qual: 'Professional Graduate', edu: 'B.E.; Educated at Regional Engineering College, Warangal, Andhra Pradesh', criminalRecord: '0'},
'm-ap18': {id: 'm-ap18', state: 'AP', constituency: 'Ongole', name: 'Y.V. Subba Reddy', party: 'Yuvajana Sramika Rythu Congress Party', age: '57', qual: 'Professional Post Graduate', edu: 'MBA', criminalRecord: '0'},
'm-ap19': {id: 'm-ap19', state: 'AP', constituency: 'Rajahmundry', name: 'Murali Mohan Maganti', party: 'Telugu Desam Party', age: '78', qual: 'Inter/ Higher Secondary', edu: 'Inter/Higher Secondary', criminalRecord: '0'},
'm-ap20': {id: 'm-ap20', state: 'AP', constituency: 'Rajampet', name: 'P.V. Midhun Reddy', party: 'Yuvajana Sramika Rythu Congress Party', age: '40', qual: 'Professional Post Graduate', edu: 'MBA', criminalRecord: '0'},
'm-ap21': {id: 'm-ap21', state: 'AP', constituency: 'Srikakulam', name: 'Rammohan Naidu Kinjarapu', party: 'Telugu Desam Party', age: '30', qual: 'Professional Post Graduate', edu: 'M.B.A', criminalRecord: '0'},
'm-ap22': {id: 'm-ap22', state: 'AP', constituency: 'Tirupati', name: 'Varaprasad Rao Velagapalli', party: 'Yuvajana Sramika Rythu Congress Party', age: '65', qual: 'Doctorate', edu: 'M.Sc., Ph.D. (Biochemistry), M.A. (U.K.)', criminalRecord: '0'},
'm-ap23': {id: 'm-ap23', state: 'AP', constituency: 'Vijayawada', name: 'Kesineni Srinivas', party: 'Telugu Desam Party', age: '52', qual: 'Matric', edu: 'Matric', criminalRecord: '0'},
'm-ap24': {id: 'm-ap24', state: 'AP', constituency: 'Visakhapatnam', name: 'Kambhampati Hari Babu', party: 'Bharatiya Janata Party', age: '65', qual: 'Doctorate', edu: 'M.E., Ph.D.', criminalRecord: '0'},
'm-ap25': {id: 'm-ap25', state: 'AP', constituency: 'Vizianagaram', name: 'Ashok Gajapathi Raju Pusapati', party: 'Telugu Desam Party', age: '67', qual: 'Matric', edu: 'Matric', criminalRecord: '0'},
'm-ar1': {id: 'm-ar1', state: 'AR', constituency: 'Arunachal West', name: 'Kiren Rijiju', party: 'Bharatiya Janata Party', age: '46', qual: 'Professional Graduate', edu: 'B.A.,LL.B. Educated at Hansraj College and Campus Law Centre, Faculty of Law, University of Delhi', criminalRecord: '0'},
'm-ar2': {id: 'm-ar2', state: 'AR', constituency: 'Arunachal East', name: 'Ninong Ering', party: 'Indian National Congress', age: '59', qual: 'Graduate', edu: 'B.A.; Educated at J.N. College, Pasighat, Arunachal Pradesh', criminalRecord: '0'}
};
