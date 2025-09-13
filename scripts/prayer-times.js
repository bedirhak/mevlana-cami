// Prayer Times JavaScript for Stavanger, Norway using a static monthly schedule

class PrayerTimes {
    constructor() {
        // Static prayer times data for September and October 2025
        this.staticPrayerTimes = {
            "2025-09-06": { "Imsak": "04:27", "Gunes": "06:39", "Ogle": "13:41", "Ikindi": "17:15", "Aksam": "20:32", "Yatsi": "22:39" },
            "2025-09-07": { "Imsak": "04:28", "Gunes": "06:41", "Ogle": "13:40", "Ikindi": "17:13", "Aksam": "20:29", "Yatsi": "22:37" },
            "2025-09-08": { "Imsak": "04:29", "Gunes": "06:43", "Ogle": "13:40", "Ikindi": "17:11", "Aksam": "20:26", "Yatsi": "22:33" },
            "2025-09-09": { "Imsak": "04:29", "Gunes": "06:45", "Ogle": "13:40", "Ikindi": "17:09", "Aksam": "20:24", "Yatsi": "22:29" },
            "2025-09-10": { "Imsak": "04:30", "Gunes": "06:48", "Ogle": "13:39", "Ikindi": "17:07", "Aksam": "20:21", "Yatsi": "22:25" },
            "2025-09-11": { "Imsak": "04:31", "Gunes": "06:50", "Ogle": "13:39", "Ikindi": "17:05", "Aksam": "20:18", "Yatsi": "22:22" },
            "2025-09-12": { "Imsak": "04:32", "Gunes": "06:52", "Ogle": "13:38", "Ikindi": "17:03", "Aksam": "20:15", "Yatsi": "22:18" },
            "2025-09-13": { "Imsak": "04:32", "Gunes": "06:54", "Ogle": "13:38", "Ikindi": "17:02", "Aksam": "20:12", "Yatsi": "22:14" },
            "2025-09-14": { "Imsak": "04:35", "Gunes": "06:57", "Ogle": "13:38", "Ikindi": "17:00", "Aksam": "20:09", "Yatsi": "22:10" },
            "2025-09-15": { "Imsak": "04:39", "Gunes": "06:59", "Ogle": "13:37", "Ikindi": "16:58", "Aksam": "20:06", "Yatsi": "22:06" },
            "2025-09-16": { "Imsak": "04:42", "Gunes": "07:01", "Ogle": "13:37", "Ikindi": "16:56", "Aksam": "20:03", "Yatsi": "22:03" },
            "2025-09-17": { "Imsak": "04:45", "Gunes": "07:03", "Ogle": "13:37", "Ikindi": "16:53", "Aksam": "20:00", "Yatsi": "21:59" },
            "2025-09-18": { "Imsak": "04:48", "Gunes": "07:06", "Ogle": "13:36", "Ikindi": "16:51", "Aksam": "19:57", "Yatsi": "21:56" },
            "2025-09-19": { "Imsak": "04:51", "Gunes": "07:08", "Ogle": "13:36", "Ikindi": "16:49", "Aksam": "19:54", "Yatsi": "21:52" },
            "2025-09-20": { "Imsak": "04:54", "Gunes": "07:10", "Ogle": "13:36", "Ikindi": "16:47", "Aksam": "19:51", "Yatsi": "21:48" },
            "2025-09-21": { "Imsak": "04:57", "Gunes": "07:12", "Ogle": "13:35", "Ikindi": "16:45", "Aksam": "19:48", "Yatsi": "21:45" },
            "2025-09-22": { "Imsak": "05:00", "Gunes": "07:14", "Ogle": "13:35", "Ikindi": "16:43", "Aksam": "19:45", "Yatsi": "21:42" },
            "2025-09-23": { "Imsak": "05:03", "Gunes": "07:17", "Ogle": "13:35", "Ikindi": "16:41", "Aksam": "19:42", "Yatsi": "21:38" },
            "2025-09-24": { "Imsak": "05:06", "Gunes": "07:19", "Ogle": "13:34", "Ikindi": "16:39", "Aksam": "19:39", "Yatsi": "21:35" },
            "2025-09-25": { "Imsak": "05:09", "Gunes": "07:21", "Ogle": "13:34", "Ikindi": "16:37", "Aksam": "19:37", "Yatsi": "21:31" },
            "2025-09-26": { "Imsak": "05:11", "Gunes": "07:23", "Ogle": "13:34", "Ikindi": "16:35", "Aksam": "19:34", "Yatsi": "21:28" },
            "2025-09-27": { "Imsak": "05:14", "Gunes": "07:26", "Ogle": "13:33", "Ikindi": "16:33", "Aksam": "19:31", "Yatsi": "21:25" },
            "2025-09-28": { "Imsak": "05:17", "Gunes": "07:28", "Ogle": "13:33", "Ikindi": "16:31", "Aksam": "19:28", "Yatsi": "21:21" },
            "2025-09-29": { "Imsak": "05:20", "Gunes": "07:30", "Ogle": "13:32", "Ikindi": "16:28", "Aksam": "19:25", "Yatsi": "21:18" },
            "2025-09-30": { "Imsak": "05:22", "Gunes": "07:32", "Ogle": "13:32", "Ikindi": "16:26", "Aksam": "19:22", "Yatsi": "21:15" },
            "2025-10-01": { "Imsak": "05:25", "Gunes": "07:35", "Ogle": "13:32", "Ikindi": "16:24", "Aksam": "19:19", "Yatsi": "21:12" },
            "2025-10-02": { "Imsak": "05:27", "Gunes": "07:37", "Ogle": "13:32", "Ikindi": "16:22", "Aksam": "19:16", "Yatsi": "21:09" },
            "2025-10-03": { "Imsak": "05:30", "Gunes": "07:39", "Ogle": "13:31", "Ikindi": "16:20", "Aksam": "19:13", "Yatsi": "21:06" },
            "2025-10-04": { "Imsak": "05:33", "Gunes": "07:42", "Ogle": "13:31", "Ikindi": "16:18", "Aksam": "19:10", "Yatsi": "21:03" },
            "2025-10-05": { "Imsak": "05:35", "Gunes": "07:44", "Ogle": "13:31", "Ikindi": "16:16", "Aksam": "19:07", "Yatsi": "21:00" },
            "2025-10-06": { "Imsak": "05:38", "Gunes": "07:46", "Ogle": "13:30", "Ikindi": "16:13", "Aksam": "19:04", "Yatsi": "20:56" },
            "2025-10-07": { "Imsak": "05:40", "Gunes": "07:48", "Ogle": "13:30", "Ikindi": "16:11", "Aksam": "19:02", "Yatsi": "20:53" },
            "2025-10-08": { "Imsak": "05:43", "Gunes": "07:51", "Ogle": "13:30", "Ikindi": "16:09", "Aksam": "18:59", "Yatsi": "20:51" },
            "2025-10-09": { "Imsak": "05:45", "Gunes": "07:53", "Ogle": "13:29", "Ikindi": "16:07", "Aksam": "18:56", "Yatsi": "20:48" },
            "2025-10-10": { "Imsak": "05:47", "Gunes": "07:55", "Ogle": "13:29", "Ikindi": "16:05", "Aksam": "18:53", "Yatsi": "20:45" },
            "2025-10-11": { "Imsak": "05:50", "Gunes": "07:58", "Ogle": "13:29", "Ikindi": "16:03", "Aksam": "18:50", "Yatsi": "20:42" },
            "2025-10-12": { "Imsak": "05:52", "Gunes": "08:00", "Ogle": "13:29", "Ikindi": "16:01", "Aksam": "18:47", "Yatsi": "20:39" }
        };

        this.prayerTimeMap = {
            'Imsak': 'fajrTime',
            'Gunes': 'sunriseTime',
            'Ogle': 'dhuhrTime',
            'Ikindi': 'asrTime',
            'Aksam': 'maghribTime',
            'Yatsi': 'ishaTime'
        };
        this.prayerNameMap = {
            'Imsak': 'İmsak',
            'Gunes': 'Güneş',
            'Ogle': 'Öğle',
            'Ikindi': 'İkindi',
            'Aksam': 'Akşam',
            'Yatsi': 'Yatsı'
        };

        this.init();
    }

    init() {
        this.updateDates();
        const todayTimes = this.getTimesForToday();
        if (todayTimes) {
            this.displayPrayerTimes(todayTimes);
            this.updateNextPrayer(todayTimes);
            this.generateWeeklySchedule();
        } else {
            this.showError();
        }
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getTimesForToday() {
        const todayStr = this.formatDate(new Date());
        return this.staticPrayerTimes[todayStr];
    }

    getTimesForDate(date) {
        const dateStr = this.formatDate(date);
        return this.staticPrayerTimes[dateStr];
    }

    updateDates() {
        const now = new Date();
        const gregorianDate = now.toLocaleDateString('tr-TR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Tarayıcı desteği ile doğru Hicri tarihi al
        try {
            const hijriDate = new Intl.DateTimeFormat('tr-u-ca-islamic', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).format(now);
            document.getElementById('hijriDate').textContent = hijriDate;
        } catch (e) {
            console.error("Hicri takvim alınamadı:", e);
            document.getElementById('hijriDate').textContent = "Hicri Takvim"; // Hata durumunda varsayılan
        }

        document.getElementById('gregorianDate').textContent = gregorianDate;
    }

    displayPrayerTimes(prayerTimes) {
        for (const [vakit, saat] of Object.entries(prayerTimes)) {
            const elementId = this.prayerTimeMap[vakit];
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.textContent = saat;
                }
            }
        }
    }

    updateNextPrayer(prayerTimes) {
        const now = new Date();
        const currentTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        let nextPrayer = null;
        let nextPrayerVakit = '';

        // Sıralı vakitler
        const vakitOrder = ['Imsak', 'Gunes', 'Ogle', 'Ikindi', 'Aksam', 'Yatsi'];

        for (const vakit of vakitOrder) {
            const saat = prayerTimes[vakit];
            if (saat > currentTimeStr) {
                nextPrayer = saat;
                nextPrayerVakit = vakit;
                break;
            }
        }

        // Bugün için bir sonraki vakit bulunamazsa, yarının ilk vaktini göster
        if (!nextPrayer) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowTimes = this.getTimesForDate(tomorrow);
            if (tomorrowTimes) {
                nextPrayer = tomorrowTimes['Imsak'];
                nextPrayerVakit = 'Imsak';
            }
        }

        if (nextPrayer) {
            document.getElementById('nextPrayerName').textContent = this.prayerNameMap[nextPrayerVakit] || nextPrayerVakit;
            document.getElementById('nextPrayerTime').textContent = nextPrayer;
            this.startCountdown(nextPrayer);
        }
    }

    startCountdown(nextPrayerTimeStr) {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }

        const [hours, minutes] = nextPrayerTimeStr.split(':').map(Number);
        const nextPrayerDate = new Date();
        nextPrayerDate.setHours(hours, minutes, 0, 0);

        if (nextPrayerDate < new Date()) {
            nextPrayerDate.setDate(nextPrayerDate.getDate() + 1);
        }

        this.countdownInterval = setInterval(() => {
            const now = new Date();
            const diff = nextPrayerDate - now;

            if (diff <= 0) {
                // Vakit geldiğinde sayfayı yeniden başlat
                this.init();
                clearInterval(this.countdownInterval);
                return;
            }

            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('countdown').textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }, 1000);
    }

    generateWeeklySchedule() {
        const tbody = document.getElementById('weeklySchedule');
        tbody.innerHTML = ''; // Tabloyu temizle
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const times = this.getTimesForDate(date);

            const row = document.createElement('tr');
            if (i === 0) {
                row.classList.add('today');
            }

            const dateStr = date.toLocaleDateString('tr-TR', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
            });

            row.innerHTML = `
                <td>${dateStr}</td>
                <td>${times ? times['Imsak'] : '--:--'}</td>
                <td>${times ? times['Gunes'] : '--:--'}</td>
                <td>${times ? times['Ogle'] : '--:--'}</td>
                <td>${times ? times['Ikindi'] : '--:--'}</td>
                <td>${times ? times['Aksam'] : '--:--'}</td>
                <td>${times ? times['Yatsi'] : '--:--'}</td>
            `;

            tbody.appendChild(row);
        }
    }

    showError() {
        Object.values(this.prayerTimeMap).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = "Veri Yok";
            }
        });
        document.getElementById('countdown').textContent = "Veri Yok";
    }
}

// Initialize prayer times when page loads
document.addEventListener('DOMContentLoaded', function () {
    new PrayerTimes();
});