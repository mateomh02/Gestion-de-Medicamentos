 const medicines = [
            { name: 'Acetaminofén', display: '💊 Acetaminofén MK' },
            { name: 'Ibuprofeno', display: '💊 Ibuprofeno MK' },
            { name: 'Loratadina', display: '💊 Loratadina' },
            { name: 'Omeprazol', display: '💊 Omeprazol' }
        ];

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }

        function goToLogin() {
            showPage('login');
        }

        function goToRegister() {
            showPage('register');
        }

        function goToHome() {
            showPage('home');
        }

        function goToQueue() {
            showPage('queue');
        }

        function goToTurn() {
            showPage('turn');
        }

        function showNotifications() {
            showPage('notifications');
        }

        function showMedicineDetail(name, display) {
            document.getElementById('detailTitle').textContent = name;
            document.getElementById('detailImg').textContent = display;
            showPage('detail');
        }

        function filterMedicines() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const grid = document.getElementById('medicinesGrid');
            
            if (searchTerm.length === 0) {
                grid.innerHTML = `
                    <div class="medicine-card" onclick="showMedicineDetail('Acetaminofén', '💊 Acetaminofén MK')">
                        <div class="medicine-img">💊 Acetaminofén MK</div>
                        <div class="medicine-name">Acetaminofén</div>
                        <div class="add-btn">+</div>
                    </div>
                    <div class="medicine-card" onclick="showMedicineDetail('Ibuprofeno', '💊 Ibuprofeno MK')">
                        <div class="medicine-img">💊 Ibuprofeno MK</div>
                        <div class="medicine-name">Ibuprofeno</div>
                        <div class="add-btn">+</div>
                    </div>
                    <div class="medicine-card" onclick="showMedicineDetail('Loratadina', '💊 Loratadina')">
                        <div class="medicine-img">💊 Loratadina</div>
                        <div class="medicine-name">Loratadina</div>
                        <div class="add-btn">+</div>
                    </div>
                    <div class="medicine-card" onclick="showMedicineDetail('Omeprazol', '💊 Omeprazol')">
                        <div class="medicine-img">💊 Omeprazol</div>
                        <div class="medicine-name">Omeprazol</div>
                        <div class="add-btn">+</div>
                    </div>
                `;
                return;
            }

            const filtered = medicines.filter(med => 
                med.name.toLowerCase().includes(searchTerm)
            );

            grid.innerHTML = filtered.map(med => `
                <div class="medicine-card" onclick="showMedicineDetail('${med.name}', '${med.display}')">
                    <div class="medicine-img">${med.display}</div>
                    <div class="medicine-name">${med.name}</div>
                    <div class="add-btn">+</div>
                </div>
            `).join('');
        }