document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#00FFFF', '#00FF00', '#FF00FF', '#FFFF00', '#FF0000', '#0000FF']; // Warna-warna listrik
    const body = document.body;

    document.addEventListener('mousemove', (e) => {
        const spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        spark.style.width = '10px';
        spark.style.height = '10px';
        spark.style.borderRadius = '50%';
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.boxShadow = `0 0 10px 5px ${colors[Math.floor(Math.random() * colors.length)]}`;
        spark.style.pointerEvents = 'none';
        spark.style.transition = 'all 0.3s ease-out';

        body.appendChild(spark);

        // Animasi pergerakan dan menghilang
        setTimeout(() => {
            spark.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(2)`;
            spark.style.opacity = '0';
        }, 10);

        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            spark.remove();
        }, 300);
    });
});
