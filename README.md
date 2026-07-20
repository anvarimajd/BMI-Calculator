<div align="center">

# 🩺 پروژه محاسبه‌گر شاخص توده بدنی (BMI)


## ساخته شده با ❤️ توسط React Native و Expo

![React Native](https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![Platform](https://img.shields.io/badge/Android-iOS-success?style=for-the-badge)

یک اپلیکیشن مدرن برای محاسبه شاخص توده بدنی (BMI) که با **React Native** و **Expo** توسعه داده شده است.

</div>

---

## 📖 معرفی پروژه

این پروژه یک برنامه محاسبه شاخص توده بدنی (Body Mass Index) است که کاربر با وارد کردن موارد زیر می‌تواند مقدار BMI خود را مشاهده کرده و بر اساس نتیجه، پیام و توصیه مناسب دریافت کند:

- ✅ وزن
- ✅ قد
- ✅ جنسیت
- ✅ بازه سنی

هدف این پروژه آموزش مفاهیم پایه تا متوسط **React Native** مانند:

- Componentها
- State
- فرم‌ها
- اعتبارسنجی اطلاعات
- طراحی رابط کاربری

است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| رابط کاربری مدرن | ✅ |
| انتخاب جنسیت | ✅ |
| انتخاب بازه سنی | ✅ |
| دریافت وزن | ✅ |
| دریافت قد | ✅ |
| محاسبه BMI | ✅ |
| نمایش وضعیت سلامتی | ✅ |
| نمایش پیام مناسب | ✅ |
| اعتبارسنجی اطلاعات | ✅ |
| طراحی Responsive | ✅ |
| استفاده از React Hooks | ✅ |

---

## 🧮 فرمول محاسبه BMI

```
BMI = وزن (کیلوگرم) ÷ (قد × قد)
```

### مثال:

```
وزن = 70kg
قد = 175cm
BMI = 70 ÷ (1.75 × 1.75)
BMI = 22.86
```

---

## 📊 دسته‌بندی BMI

| BMI | وضعیت |
|------|--------|
| کمتر از 18.5 | کمبود وزن |
| 18.5 تا 24.9 | وزن طبیعی |
| 25 تا 29.9 | اضافه وزن |
| بیشتر از 30 | چاقی |

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **JavaScript**
- **React Hooks**
- **JSX**
- **StyleSheet**
- **Expo Router**

---

## 📂 ساختار پروژه

```
BMI
├── app
├── assets
├── components
│   ├── Header.jsx
│   ├── Main.jsx
│   └── Footer.jsx
├── package.json
└── README.md
```

---

## 🚀 ساخت پروژه جدید

در صورتی که قصد دارید یک پروژه جدید Expo ایجاد کنید، یکی از دستورات زیر را اجرا کنید:

### ساخت پروژه با نام دلخواه

```bash
npx create-expo-app@latest
```

### ساخت پروژه با نام BMI

```bash
npx create-expo-app@latest BMI
```

سپس وارد پوشه پروژه شوید:

```bash
cd BMI
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرای پروژه، موارد زیر باید روی سیستم نصب باشند:

- [ ] Node.js (نسخه LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Java JDK
- [ ] Android SDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

برای نصب صحیح React Native، پیشنهاد می‌شود از مستندات رسمی استفاده کنید.

### مستندات React Native

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این مستند نحوه نصب موارد زیر آموزش داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی دستگاه واقعی

---

## 📥 دانلود Android Studio

اگر دانلود Android Studio از سایت اصلی برای شما دشوار است، می‌توانید از لینک زیر استفاده کنید:

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Android Emulator یا System Image با خطا مواجه شدید، می‌توانید فایل‌های آفلاین را از لینک زیر دریافت کنید:

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### شروع Development Server

```bash
npx expo start
```

### اجرای اندروید

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن کش

```bash
npx expo start -c
```

---

## 📱 اجرای پروژه روی موبایل

۱. برنامه **Expo Go** را نصب کنید.

۲. دستور زیر را اجرا کنید:

```bash
npx expo start
```

۳. QR Code نمایش داده شده را توسط **Expo Go** اسکن کنید.

---

## 📦 دستورات پرکاربرد

### نمایش نسخه Node

```bash
node -v
```

### نمایش نسخه npm

```bash
npm -v
```

### نمایش نسخه Expo

```bash
npx expo --version
```

### نصب پکیج

```bash
npm install package-name
```

### نصب پکیج مخصوص Expo

```bash
npx expo install package-name
```

---

## ❗ رفع مشکلات متداول

### پروژه اجرا نمی‌شود

کش Expo را پاک کنید:

```bash
npx expo start -c
```

### پکیج‌ها نصب نمی‌شوند

```bash
npm install
```

یا

```bash
rm -rf node_modules
npm install
```

### Emulator اجرا نمی‌شود

- ✅ فعال بودن Virtualization در BIOS
- ✅ نصب Android SDK
- ✅ نصب Java JDK
- ✅ ساخت Emulator از داخل Android Studio
- ✅ استفاده از Android SDK Offline در صورت مشکل دانلود

---

## 📚 منابع آموزشی

### مستندات رسمی React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### راه‌اندازی محیط توسعه

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

### مستندات Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا خواهید شد:

- Component
- JSX
- Props
- State
- React Hooks
- useState
- StyleSheet
- View
- Text
- TextInput
- TouchableOpacity
- ساخت رابط کاربری
- اعتبارسنجی فرم
- مدیریت State
- معماری پروژه React Native

---

## 🚀 توسعه‌های آینده

- [ ] ذخیره تاریخچه BMI
- [ ] حالت Dark Mode
- [ ] پشتیبانی از چند زبان
- [ ] نمودار تغییرات وزن
- [ ] پیشنهاد رژیم غذایی
- [ ] پیشنهاد برنامه ورزشی
- [ ] ذخیره اطلاعات کاربر
- [ ] اتصال به پایگاه داده
- [ ] احراز هویت کاربران

---

## 🤝 مشارکت

اگر پیشنهادی برای بهتر شدن پروژه دارید، خوشحال می‌شوم **Pull Request** ارسال کنید.

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

<div align="center">


⭐ اگر این پروژه برای شما مفید بود، لطفاً آن را **Star** کنید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>
