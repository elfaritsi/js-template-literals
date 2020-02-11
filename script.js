// Mencoba menampilkan object ke file index.html menggunakan template literals

let mhs = {
	nama : 'Tajuddin',
	semester : 5
};

let element = `
	<hr />
	<div class="el">
		<ul>
			<li>Nama : ${mhs.nama}</li>
			<li>Semester : ${mhs.semester}</li>
		</ul>
		<hr />
	</div>`;


document.write(element);


// Mencoba melakukan pengkondisian ternary pada template literals
let motor = {
	nama : 'Vixion',
	cc : '150 cc',
	merk : 'Yamaha'
};

let element2 = `
	<div class="el">
		<ul>
			<li>Nama Motor : ${motor.nama}</li>
			<li>Jumlah CC : ${motor.cc}</li>
			${motor.merk ? `<li>Merk Motor : ${motor.merk}</li>` : ''}
		</ul>
		<hr />
	</div>`;


document.write(element2);

// Melakukan perulangan menggunakan map function
let mhs2 = {
	nama : 'Bg Wan',
	Semester : 2,
	mk : ['Sistem Jaringan Komputer', 'Arsitektur Komputer', 'Sistem Basis Data']
};

let element3 = `
	<div class="el">
		<ul>
			<li>Nama : ${mhs2.nama}</li>
			<li>Semester : ${mhs2.Semester}</li>
			<li>Mata Kuliah : ${mhs2.mk.map(mk => `${mk}`)}</li>
		</ul>
		<hr />
	</div>`;


document.write(element3);


// Membuat Function pada template literals

let mhs3 = {
	nama : 'Bustomi',
	Semester : 3,
	mk : ['Etika Profesi', 'Agama Islam', 'Pemrograman Visual II']
};


function cetakMataKuliah(mataKuliah){
	return mataKuliah.map(mk => mk);
};

let element4 = `
	<div class="el">
		<ul>
			<li>Nama : ${mhs2.nama}</li>
			<li>Semester : ${mhs2.Semester}</li>
			<li>Mata Kuliah : ${cetakMataKuliah(mhs3.mk)}</li>
		</<ul>
	  </div>
	<hr />`;

document.write(element4);