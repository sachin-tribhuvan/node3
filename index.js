<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>School Management System</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">

  <!-- Header -->
  <header class="bg-indigo-600 text-white">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">🏫 School Management System</h1>
      <nav class="space-x-6">
        <a href="#dashboard" class="hover:underline">Dashboard</a>
        <a href="#students" class="hover:underline">Students</a>
        <a href="#teachers" class="hover:underline">Teachers</a>
        <a href="#classes" class="hover:underline">Classes</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Dashboard -->
  <section id="dashboard" class="container mx-auto px-6 py-10">
    <h2 class="text-3xl font-semibold mb-6">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-lg font-semibold">Total Students</h3>
        <p class="text-3xl font-bold text-indigo-600 mt-2">520</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-lg font-semibold">Total Teachers</h3>
        <p class="text-3xl font-bold text-green-600 mt-2">45</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-lg font-semibold">Classes</h3>
        <p class="text-3xl font-bold text-blue-600 mt-2">24</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-lg font-semibold">Departments</h3>
        <p class="text-3xl font-bold text-purple-600 mt-2">6</p>
      </div>
    </div>
  </section>

  <!-- Students Section -->
  <section id="students" class="bg-white py-10">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-semibold mb-6">Student List</h2>
      <div class="overflow-x-auto">
        <table class="w-full border border-gray-300">
          <thead class="bg-gray-200">
            <tr>
              <th class="border px-4 py-2">Roll No</th>
              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Class</th>
              <th class="border px-4 py-2">Section</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Amit Sharma</td>
              <td class="border px-4 py-2">10</td>
              <td class="border px-4 py-2">A</td>
            </tr>
            <tr class="text-center">
              <td class="border px-4 py-2">2</td>
              <td class="border px-4 py-2">sachin Patil</td>
              <td class="border px-4 py-2">9</td>
              <td class="border px-4 py-2">B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Teachers Section -->
  <section id="teachers" class="container mx-auto px-6 py-10">
    <h2 class="text-3xl font-semibold mb-6">Teachers</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold">Mr. R. Kulkarni</h3>
        <p class="text-gray-600">Subject: Mathematics</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold">Ms. P. Deshmukh</h3>
        <p class="text-gray-600">Subject: English</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold">Mr. S. Patil</h3>
        <p class="text-gray-600">Subject: Science</p>
      </div>
    </div>
  </section>

  <!-- Classes Section -->
  <section id="classes" class="bg-white py-10">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-semibold mb-6">Classes</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Class 1 to 5 – Primary</li>
        <li>Class 6 to 8 – Middle School</li>
        <li>Class 9 to 10 – Secondary</li>
        <li>Class 11 to 12 – Higher Secondary</li>
      </ul>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="container mx-auto px-6 py-10">
    <h2 class="text-3xl font-semibold mb-6">Contact Us</h2>
    <form class="bg-white p-6 rounded-xl shadow max-w-lg">
      <label class="block mb-2">Name</label>
      <input type="text" class="w-full border p-2 mb-4" />

      <label class="block mb-2">Email</label>
      <input type="email" class="w-full border p-2 mb-4" />

      <label class="block mb-2">Message</label>
      <textarea class="w-full border p-2 mb-4"></textarea>

      <button class="bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white text-center py-4">
    <p>© 2026 School Management System | Designed for Project</p>
  </footer>

</body>
</html>