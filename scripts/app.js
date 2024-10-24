export function dropdown() {
    const item = document.querySelector('.dropdown-item');
    if(item) {
        const content = item.querySelector('.dropdown-item__content');
        item.addEventListener('click', () => {
            content.style.display = 'flex';
            content.style.flexDirection = 'column';
        });

        const button = content.querySelectorAll('.dropdown-item__content__button');
        const post = item.querySelector('.__post');
        button.forEach(item => {
            item.addEventListener('click', () => {
                post.innerHTML = item.innerHTML;
                post.dataset.id = item.dataset.post;
                setTimeout(() => {
                    content.style.display = 'none';
                }, 0);
            });
        });
    }

    const loginBtn = document.querySelector('.button_login');

    if(loginBtn) {
        const item = document.querySelector('.dropdown-item');
        const post = item.querySelector('.__post');
        loginBtn.addEventListener('click', () => {
            if(post.dataset.id === 'hr') {
                window.location.href = './personal-account-hr.html';
            } else if(post.dataset.id === 'admin') {
                window.location.href = './3.personal-account-Ad.html';
            } else if(post.dataset.id === 'boss') {
                window.location.href = './2.personal-account-boss.html';
            }
        });
    }
}

dropdown()