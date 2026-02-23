{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red80\green93\blue147;\red30\green31\blue41;\red246\green246\blue239;
\red238\green252\blue122;\red124\green228\blue252;\red174\green122\blue247;\red252\green93\blue186;\red72\green255\blue104;
\red253\green170\blue90;}
{\*\expandedcolortbl;;\cssrgb\c38431\c44706\c64314;\cssrgb\c15686\c16471\c21176;\cssrgb\c97255\c97255\c94902;
\cssrgb\c94510\c98039\c54902;\cssrgb\c54510\c91373\c99216;\cssrgb\c74118\c57647\c97647;\cssrgb\c100000\c47451\c77647;\cssrgb\c31373\c98039\c48235;
\cssrgb\c100000\c72157\c42353;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\shad\shadx0\shady-20\shadr0\shado0 \shadc0 // ==========================================\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // MAIN FUNCTIONS (Window Management)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // ==========================================\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Initialize Lucide icons\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
lucide.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createIcons\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Window management\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  zIndex = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 100\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  activeWindows = \{\};\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  isDragging = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 false\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  currentWindow = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  dragOffset = \{ \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 x\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 y\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \};\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 openWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (win) \{\
        win.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
        win.style.zIndex = ++zIndex;\
        activeWindows[id] = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 true\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 updateTaskbar\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
        \
        \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Center on mobile\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (window.innerWidth <= \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 768\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ) \{\
            win.style.top = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '10px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            win.style.left = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '10px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            win.style.right = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '10px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            win.style.bottom = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '50px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            win.style.width = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'auto'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            win.style.height = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'auto'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \}\
    \}\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 closeWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (win) \{\
        win.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 add\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 delete\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  activeWindows[id];\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 updateTaskbar\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
    \}\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 bringToFront\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (win) \{\
        win.style.zIndex = ++zIndex;\
    \}\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 updateTaskbar\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  container = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'taskbarItems'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    container.innerHTML = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ''\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \
    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Object\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 keys\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (activeWindows).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id => \{\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (!win.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 contains\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 )) \{\
            \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  item = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createElement\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'div'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
            item.className = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'win95-button taskbar-item active cursor-pointer'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            item.innerHTML = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 `\cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <i data-lucide="$\{getIconForWindow(id)\}" class="w-4 h-4"></i>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  $\{getTitleForWindow(id)\}\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 `\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            item.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 onclick\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  = () => \{\
                \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (win.style.zIndex == zIndex) \{\
                    win.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 add\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
                    item.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'active'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
                \} \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 else\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \{\
                    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 bringToFront\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
                    win.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
                \}\
            \};\
            container.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 appendChild\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (item);\
        \}\
    \});\
    \
    lucide.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createIcons\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getIconForWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  icons = \{\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 portfolio\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'folder'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 booking\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'calendar'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 about\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'user'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 contact\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mail'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 rates\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'file-text'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \};\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 return\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  icons[id] || \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'window'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getTitleForWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  titles = \{\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 portfolio\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'Portfolio'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 booking\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'Book Me'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 about\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'About'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 contact\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'Contact'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 rates\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'Rates'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \};\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 return\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  titles[id] || id;\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Dragging functionality\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 startDrag\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e, id) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (window.innerWidth <= \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 768\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ) \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 return\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ; \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Disable drag on mobile\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \
    isDragging = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 true\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    currentWindow = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 bringToFront\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (id);\
    \
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  rect = currentWindow.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getBoundingClientRect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
    dragOffset.x = e.clientX - rect.left;\
    dragOffset.y = e.clientY - rect.top;\
    \
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mousemove'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , drag);\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mouseup'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , stopDrag);\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 drag\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (!isDragging || !currentWindow) \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 return\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  x = e.clientX - dragOffset.x;\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  y = e.clientY - dragOffset.y;\
    \
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Keep in viewport\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  maxX = window.innerWidth - currentWindow.offsetWidth;\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  maxY = window.innerHeight - currentWindow.offsetHeight - \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 40\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ; \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Minus taskbar\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \
    x = \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Math\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 max\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Math\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 min\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (x, maxX));\
    y = \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Math\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 max\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Math\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 min\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (y, maxY));\
    \
    currentWindow.style.left = x + \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    currentWindow.style.top = y + \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 stopDrag\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    isDragging = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 false\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    currentWindow = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 removeEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mousemove'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , drag);\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 removeEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mouseup'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , stopDrag);\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Start menu\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 toggleStartMenu\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  menu = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'startMenu'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    menu.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 toggle\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'show'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Clock\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 updateClock\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  now = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 new\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Date\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  time = now.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 toLocaleTimeString\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'en-US'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \{ \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 hour\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'numeric'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 minute\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '2-digit'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ,\
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 hour12\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 : \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 true\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \
    \});\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'clockTime'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).textContent = time;\
\}\
\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setInterval\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (updateClock, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 1000\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 updateClock\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Booking form\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 handleBooking\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e) \{\
    e.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 preventDefault\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
    \
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Show success modal\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'successModal'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'successModal'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).style.zIndex = ++zIndex;\
    \
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Reset form\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'bookingForm'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 reset\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
    \
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Close booking window after delay\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setTimeout\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (() => \{\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 closeWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'booking'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \}, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 500\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 closeSuccess\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'successModal'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 add\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'hidden'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Close start menu when clicking elsewhere\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'click'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , (e) => \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  startMenu = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'startMenu'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  startButton = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelector\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.start-button'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (!startMenu.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 contains\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e.target) && !startButton.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 contains\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e.target)) \{\
        startMenu.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'show'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \}\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Bring window to front when clicking content\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.window'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (win => \{\
    win.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mousedown'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , () => \{\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 bringToFront\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (win.id);\
    \});\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Open booking window by default on first visit\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
window.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'load'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , () => \{\
    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setTimeout\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (() => \{\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 openWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'booking'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \}, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 500\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // ==========================================\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // ADDITIONAL UTILITY FUNCTIONS\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // ==========================================\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Sound effects (optional - add if you want retro sounds)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 playClickSound\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // const audio = new Audio('click.mp3');\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // audio.play().catch(e => console.log('Audio play failed'));\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Window shake animation for error effect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 shakeWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (windowId) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (windowId);\
    win.style.animation = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'shake 0.5s'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setTimeout\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (() => \{\
        win.style.animation = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ''\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \}, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 500\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Add shake animation to styles dynamically\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  style = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createElement\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'style'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
style.textContent = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 `\
    @keyframes shake \{\
        0%, 100% \{ transform: translateX(0); \}\
        25% \{ transform: translateX(-5px); \}\
        75% \{ transform: translateX(5px); \}\
    \}\
    \
    .loading-cursor \{\
        cursor: wait !important;\
    \}\
    \
    .hourglass \{\
        display: inline-block;\
        animation: flip 1s infinite;\
    \}\
    \
    @keyframes flip \{\
        0%, 100% \{ transform: rotate(0deg); \}\
        50% \{ transform: rotate(180deg); \}\
    \}\
`\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
document.head.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 appendChild\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (style);\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Simulate "loading" for retro effect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 showLoading\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (windowId) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  win = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (windowId);\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  originalContent = win.innerHTML;\
    \
    win.innerHTML = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 `\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <div class="title-bar">\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <span>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Loading...\cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </span>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </div>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <div class="p-8 text-center">\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <div class="hourglass text-4xl mb-4">\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \uc0\u9203 \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </div>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <p>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 Please wait while system processes...\cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </p>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <div class="progress-bar mt-4 w-3/4 mx-auto">\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
                \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 <div class="progress-fill" style="width: 0%" id="loadBar"></div>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </div>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf8 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 </div>\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
    \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 `\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  progress = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  interval = \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setInterval\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (() => \{\
        progress += \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 10\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'loadBar'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).style.width = progress + \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '%'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (progress >= \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 100\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ) \{\
            \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 clearInterval\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (interval);\
            win.innerHTML = originalContent;\
            \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 attachWindowEvents\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
        \}\
    \}, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 100\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Re-attach events after loading (helper function)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 attachWindowEvents\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    lucide.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createIcons\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Desktop icon selection effect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.desktop-icon'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (icon => \{\
    icon.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'click'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e) \{\
        \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Remove selected from all\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.desktop-icon'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (i => i.classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'selected'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ));\
        \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Add to clicked\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 this\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .classList.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 add\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'selected'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \});\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Double click to open (retro style)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  clickTimer = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.desktop-icon'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (icon => \{\
    icon.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'click'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (e) \{\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (clickTimer) \{\
            \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 clearTimeout\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (clickTimer);\
            clickTimer = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
            \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Double click action\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  windowId = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 this\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getAttribute\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'onclick'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 match\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf10 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 /'([^']+)'/\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 )[\cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 1\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ];\
            \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 openWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (windowId);\
        \} \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 else\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \{\
            clickTimer = \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 setTimeout\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (() => \{\
                clickTimer = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
                \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Single click action (selection only, already handled above)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
            \}, \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 250\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
        \}\
    \});\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Keyboard shortcuts (Alt + F4 to close active window)\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'keydown'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , (e) => \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (e.altKey && e.key === \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'F4'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ) \{\
        e.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 preventDefault\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
        \cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Close topmost window\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  windows = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.window:not(.hidden)'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  topWindow = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 null\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  maxZ = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \
        windows.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (win => \{\
            \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  z = \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 parseInt\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (win.style.zIndex || \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 0\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
            \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (z > maxZ) \{\
                maxZ = z;\
                topWindow = win;\
            \}\
        \});\
        \
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (topWindow) \{\
            \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 closeWindow\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (topWindow.id);\
        \}\
    \}\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Retro tooltip system\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 showTooltip\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (element, text) \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  tooltip = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 createElement\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'div'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    tooltip.className = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'win95-border bg-yellow-100 p-1 text-sm absolute z-[99999]'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    tooltip.style.top = (element.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getBoundingClientRect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ().bottom + \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 5\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ) + \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    tooltip.style.left = element.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getBoundingClientRect\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ().left + \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'px'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    tooltip.textContent = text;\
    tooltip.id = \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'active-tooltip'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    document.body.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 appendChild\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (tooltip);\
\}\
\
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 hideTooltip\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  tooltip = document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 getElementById\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'active-tooltip'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (tooltip) tooltip.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 remove\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
\}\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Add tooltips to desktop icons\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '.desktop-icon'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (icon => \{\
    icon.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mouseenter'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 function\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 () \{\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 const\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  text = \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 this\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 .\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelector\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'span'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).textContent;\
        \cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 showTooltip\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 this\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , \cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'Open '\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  + text);\
    \});\
    icon.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'mouseleave'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , hideTooltip);\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Prevent accidental form close with unsaved changes\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
\cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 let\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  formDirty = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 false\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelectorAll\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '#bookingForm input, #bookingForm textarea, #bookingForm select'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 forEach\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (input => \{\
    input.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'change'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , () => formDirty = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 true\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
    input.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'input'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , () => formDirty = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 true\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 );\
\});\
\
document.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 querySelector\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 '#booking button[onclick*="closeWindow"]'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ).\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 addEventListener\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'click'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 , (e) => \{\
    \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (formDirty) \{\
        \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 if\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  (!\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 confirm\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 (\cf9 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 'You have unsaved changes. Discard them?'\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 )) \{\
            e.\cf5 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 stopPropagation\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ();\
            \cf6 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 return\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0  \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 false\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
        \}\
        formDirty = \cf7 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 false\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 ;\
    \}\
\});\
\
\cf2 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 // Export functions for global access\cf4 \shad\shadx0\shady-20\shadr0\shado0 \shadc0 \
window.shakeWindow = shakeWindow;\
window.showLoading = showLoading;}