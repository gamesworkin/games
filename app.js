/* ==========================================================================
   0. VARIÁVEIS GLOBAIS E CONFIGURAÇÃO BASE (THEME RETRO CYBERPUNK)
   ========================================================================== */
:root {
    --bg-main: #0a0b10;
    --bg-card: #121420;
    --bg-input: #1a1d30;
    --neon-cyan: #00f2fe;
    --neon-purple: #9b51e0;
    --neon-pink: #ff007f;
    --text-white: #ffffff;
    --text-gray: #a0a5c0;
    --btn-green: #2ed573;
    --btn-red: #ff4757;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-main);
    color: var(--text-white);
    font-family: var(--font-family);
    min-height: 100vh;
    overflow-x: hidden;
}

.container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
}

/* Utilitários */
.hidden { display: none !important; }
.justify-end { justify-content: flex-end; }

/* ==========================================================================
   1. NAVBAR / HEADER
   ========================================================================== */
.navbar {
    background: linear-gradient(135deg, #16192b 0%, #0d0f1d 100%);
    border-bottom: 2px solid rgba(0, 242, 254, 0.2);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--text-white);
}

.logo span span {
    color: var(--neon-cyan);
    text-shadow: 0 0 10px rgba(0, 242, 254, 0.6);
}

.animate-logo {
    color: var(--neon-pink);
    animation: pulse 2s infinite ease-in-out;
}

/* ==========================================================================
   2. BOTÕES DO SISTEMA
   ========================================================================== */
button {
    font-family: var(--font-family);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    border-radius: 6px;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--neon-cyan) 0%, #00b8ff 100%);
    color: #000;
    padding: 10px 20px;
}
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 242, 254, 0.5);
}

.btn-secondary {
    background: #252942;
    color: var(--text-gray);
    padding: 10px 20px;
}
.btn-secondary:hover { background: #323759; color: #fff; }

.btn-success {
    background: var(--btn-green);
    color: #000;
    padding: 10px 20px;
}
.btn-success:hover { box-shadow: 0 0 12px rgba(46, 213, 115, 0.4); }

.btn-success-wide {
    background: linear-gradient(135deg, var(--btn-green) 0%, #20bf6b 100%);
    color: #000;
    padding: 14px 20px;
    width: 100%;
    justify-content: center;
    font-size: 1.05rem;
}
.btn-success-wide:hover { transform: scale(1.01); box-shadow: 0 0 15px rgba(46, 213, 115, 0.5); }

.btn-danger {
    background: var(--btn-red);
    color: #fff;
    padding: 10px 18px;
}
.btn-danger:hover { box-shadow: 0 0 12px rgba(255, 71, 87, 0.4); }

.btn-danger-sm {
    background: rgba(255, 71, 87, 0.15);
    color: var(--btn-red);
    border: 1px solid rgba(255, 71, 87, 0.3);
    padding: 6px 12px;
    font-size: 0.85rem;
}
.btn-danger-sm:hover { background: var(--btn-red); color: #fff; }

.btn-cyan-run {
    background: #00f2fe;
    color: #000;
    padding: 12px 24px;
    height: 45px;
}

.btn-save-manager {
    background: linear-gradient(135deg, var(--neon-purple) 0%, #7f39fb 100%);
    color: #fff;
    padding: 10px 18px;
    border: 1px solid rgba(155, 81, 224, 0.4);
}
.btn-save-manager:hover { box-shadow: 0 0 15px rgba(155, 81, 224, 0.6); transform: translateY(-1px); }

/* User Controls Badge */
.user-profile {
    display: flex;
    align-items: center;
    gap: 15px;
}
#user-name {
    font-weight: 700;
    color: #fff;
}
.badge {
    background: #252942;
    color: var(--neon-cyan);
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 800;
    border: 1px solid rgba(0, 242, 254, 0.3);
}
.badge.admin {
    color: var(--neon-pink);
    border-color: rgba(255, 0, 127, 0.4);
    background: rgba(255, 0, 127, 0.1);
}

/* ==========================================================================
   3. FORMULÁRIOS E TELAS DE AUTENTICAÇÃO
   ========================================================================== */
.auth-card {
    background: var(--bg-card);
    border: 1px solid rgba(155, 81, 224, 0.2);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    max-width: 480px;
    margin: 60px auto;
    border-radius: 8px;
    overflow: hidden;
}

.auth-tabs {
    display: flex;
    background: #161828;
}

.tab-btn {
    flex: 1;
    padding: 15px;
    text-align: center;
    background: none;
    border-radius: 0;
    color: var(--text-gray);
    font-size: 1rem;
    justify-content: center;
}
.tab-btn.active {
    background: var(--bg-card);
    color: var(--neon-cyan);
    border-bottom: 3px solid var(--neon-cyan);
}

.auth-form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group label {
    font-size: 0.9rem;
    color: var(--text-gray);
    font-weight: 500;
}

.input-group input, .input-group select {
    background: var(--bg-input);
    border: 1px solid #2b304d;
    padding: 12px;
    border-radius: 6px;
    color: #fff;
    font-size: 1rem;
    transition: border 0.2s;
}
.input-group input:focus, .input-group select:focus {
    outline: none;
    border-color: var(--neon-cyan);
}

.form-row-2 {
    display: grid;
    grid-template-columns: 1xl 1fr;
    gap: 15px;
}

.auth-actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
}

.forgot-link {
    color: var(--text-gray);
    font-size: 0.85rem;
    text-decoration: none;
}
.forgot-link:hover { color: var(--neon-cyan); }

.btn-group-row {
    display: flex;
    gap: 12px;
}

/* ==========================================================================
   4. CARREGADOR DE ROM LOCAL
   ========================================================================== */
.local-uploader-card {
    background: linear-gradient(145deg, #131626 0%, #1a1e36 100%);
    border: 1px solid rgba(0, 242, 254, 0.15);
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.uploader-header h2 {
    font-size: 1.25rem;
    color: var(--neon-cyan);
    margin-bottom: 6px;
}
.uploader-header p {
    color: var(--text-gray);
    font-size: 0.9rem;
    margin-bottom: 20px;
}

.uploader-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 20px;
}

.select-wrapper {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.select-wrapper select {
    background: var(--bg-input);
    border: 1px solid #2b304d;
    color: #fff;
    padding: 11px;
    border-radius: 6px;
    font-size: 1rem;
    width: 100%;
}

.file-input-wrapper {
    flex: 2;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.btn-file {
    background: #252942;
    border: 1px dashed rgba(160, 165, 192, 0.4);
    color: #fff;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;
}
.btn-file:hover { background: #2f3454; }
#rom-upload { display: none; }

.file-name {
    font-size: 0.85rem;
    color: var(--text-gray);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 350px;
}

/* ==========================================================================
   5. CATÁLOGO DINÂMICO DE JOGOS
   ========================================================================== */
.category-block {
    margin-bottom: 45px;
}
.category-block > h2 {
    font-size: 1.7rem;
    border-left: 4px solid var(--neon-pink);
    padding-left: 12px;
    margin-bottom: 4px;
}
.category-block > p {
    color: var(--text-gray);
    font-size: 0.95rem;
    margin-bottom: 25px;
}

.subcategory-block {
    background: rgba(18, 20, 32, 0.4);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    border: 1px solid rgba(255,255,255,0.02);
}
.subcategory-block h3 {
    font-size: 1.15rem;
    color: var(--text-gray);
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.grid-games {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
}

.game-card {
    background: var(--bg-card);
    border: 1px solid #20243a;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
}
.game-card:hover {
    transform: translateY(-5px);
    border-color: var(--neon-cyan);
    box-shadow: 0 8px 20px rgba(0, 242, 254, 0.2);
}

.badge-system {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.75);
    border: 1px solid var(--neon-cyan);
    color: var(--neon-cyan);
    font-size: 0.65rem;
    padding: 3px 6px;
    border-radius: 4px;
    font-weight: 700;
    z-index: 2;
}

.cover-wrapper {
    width: 100%;
    padding-top: 130%; /* Proporção 4:3 clássica */
    position: relative;
    background: #090a10;
}
.cover-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    -webkit-user-drag: none;
}

.game-info {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.game-info h3 {
    font-size: 0.95rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.game-info p {
    font-size: 0.8rem;
    color: var(--text-gray);
}

/* Placeholder de carregamento */
.loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 60px 0;
    color: var(--text-gray);
}
.animate-spin { animation: spin 1s infinite linear; font-size: 2rem; color: var(--neon-cyan); }

/* ==========================================================================
   6. CONTAINER DO EMULADOR (EMULATORJS CONTAINER)
   ========================================================================== */
.emulator-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #121422;
    padding: 15px 20px;
    border-radius: 8px 8px 0 0;
    border: 1px solid #20243a;
    border-bottom: none;
}
#playing-title {
    font-size: 1.1rem;
    color: var(--neon-cyan);
}
.emu-actions-group {
    display: flex;
    gap: 12px;
}

#player-wrapper-target {
    width: 100%;
    background: #000;
    border-radius: 0 0 8px 8px;
    border: 1px solid #20243a;
    overflow: hidden;
}

/* Modificadores estritos para forçar compatibilidade com os canvas do EmulatorJS */
#emulator-player {
    width: 100%;
    height: 75vh; /* Perfeito para PC */
    position: relative;
}
#game-canvas {
    width: 100%;
    height: 100%;
}

/* Ajustes finos para Mobile */
@media (max-width: 768px) {
    #emulator-player {
        height: 50vh; /* Abre espaço para os controles virtuais no celular */
    }
    .emulator-top-bar {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }
    .emu-actions-group {
        width: 100%;
        justify-content: space-between;
    }
}

/* ==========================================================================
   7. PAINEL ADMIN E GERENCIADOR DE USUÁRIOS
   ========================================================================== */
.card-dark {
    background: var(--bg-card);
    border: 1px solid #20243a;
    border-radius: 8px;
    padding: 30px;
}
.admin-wrapper { margin-top: 50px; }
.admin-header { margin-bottom: 30px; border-bottom: 1px solid #20243a; padding-bottom: 15px;}
.admin-header h2 { color: var(--neon-pink); }
.admin-header p { color: var(--text-gray); font-size: 0.9rem; }

.admin-grid {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 40px;
}
@media(max-width: 900px){ .admin-grid { grid-template-columns: 1fr; } }

.admin-form-box {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.admin-form-box h3, .admin-util-box h3 {
    font-size: 1.15rem;
    margin-bottom: 10px;
    color: var(--text-white);
}

.btn-stack {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}
.btn-cyan-outline {
    background: none; border: 1px solid var(--neon-cyan); color: var(--neon-cyan); padding: 12px;
}
.btn-cyan-outline:hover { background: var(--neon-cyan); color: #000; }
.btn-purple-outline {
    background: none; border: 1px solid var(--neon-purple); color: var(--neon-purple); padding: 12px; display: inline-flex; align-items: center; border-radius: 6px; font-weight: 600; cursor: pointer;
}
.btn-purple-outline:hover { background: var(--neon-purple); color: #fff; }

.table-scroll { width: 100%; overflow-x: auto; margin-top: 15px; }
.admin-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    text-align: left;
}
.admin-table th, .admin-table td { padding: 12px; border-bottom: 1px solid #20243a; }
.admin-table th { background: #161828; color: var(--text-gray); }

/* Painel de Ações do Admin nos Cards */
.admin-card-actions {
    border-top: 1px solid #20243a;
    justify-content: space-between;
}
.btn-sm {
    padding: 5px 10px; font-size: 0.75rem; background: none; border: 1px solid #fff; border-radius: 4px;
}
.btn-sm:hover { background: #fff; color: #000; }

/* ==========================================================================
   8. MODALS (OVERLAYS EXCLUSIVOS E INTERFACES DE CLOUD SAVE)
   ========================================================================== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(5, 6, 10, 0.85);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.modal-card {
    background: #141726;
    border: 1px solid rgba(0, 242, 254, 0.2);
    border-radius: 8px;
    padding: 25px;
    width: 90%;
    max-width: 440px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.save-manager-card {
    max-width: 520px;
    border-color: rgba(155, 81, 224, 0.3);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.modal-header h3 {
    font-size: 1.2rem;
    color: var(--neon-cyan);
}
.btn-close-icon {
    background: none;
    font-size: 1.6rem;
    color: var(--text-gray);
    padding: 0;
}
.btn-close-icon:hover { color: var(--btn-red); }

.divider {
    border: none;
    border-top: 1px solid #232742;
    margin: 20px 0;
}

.create-save-section p {
    font-size: 0.9rem;
    color: var(--text-gray);
    margin-bottom: 12px;
}

.saves-list-container {
    max-height: 240px;
    overflow-y: auto;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 5px;
}

/* Scrollbar Customizada para os Slots */
.saves-list-container::-webkit-scrollbar { width: 5px; }
.saves-list-container::-webkit-scrollbar-track { background: #141726; }
.saves-list-container::-webkit-scrollbar-thumb { background: #2c3154; border-radius: 4px; }

.empty-list-text {
    font-size: 0.9rem;
    color: var(--text-gray);
    text-align: center;
    padding: 20px 0;
    font-style: italic;
}

/* Componente do Slot / Item de Save Individual */
.save-slot-item {
    background: #1c2038;
    border: 1px solid #292f54;
    border-radius: 6px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
}
.save-slot-item:hover { background: #232847; }

.slot-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.slot-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
}
.slot-date {
    font-size: 0.75rem;
    color: var(--text-gray);
}

.slot-actions {
    display: flex;
    gap: 8px;
}

.btn-slot-load {
    background: var(--neon-cyan);
    color: #000;
    padding: 6px 12px;
    font-size: 0.8rem;
}
.btn-slot-load:hover { box-shadow: 0 0 10px rgba(0, 242, 254, 0.4); }

.btn-slot-delete {
    background: rgba(255, 71, 87, 0.1);
    color: var(--btn-red);
    border: 1px solid rgba(255, 71, 87, 0.2);
    padding: 6px 10px;
    font-size: 0.8rem;
}
.btn-slot-delete:hover { background: var(--btn-red); color: #fff; }

/* ==========================================================================
   9. ANIMAÇÕES TIMELINE
   ========================================================================== */
@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.06); opacity: 0.8; text-shadow: 0 0 12px rgba(255, 0, 127, 0.8); }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
