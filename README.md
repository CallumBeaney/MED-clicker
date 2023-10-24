<img src="https://github.com/CallumBeaney/MED-clicker/blob/main/icon%402x.png">

### what is?
This is a Firefox extension to facilitate use of the Michigan University Middle English Dictionary website, a dictionary for words used in the English languages used ~1100-1600. It opens a link to a search query for for a given word when you double click it.  
  
You can change the settings in a menu when you right-click your mouse in the browser, changing: 
- whether double clicking will open a tab
- whether you want to search just for the headword or the whole entry
- whether you want new tabs to open in the background or not.

### Places you can test this
- The largest unannotated text resource, and one for which this extension is most suited, is the University of Michigan's [Corpus of Middle English Prose and Verse](https://quod.lib.umich.edu/c/cme/).
- Centre for Medieval and Early Modern Studies, University of Kent's [MEMSlib](https://www.memslib.co.uk/middle-english-texts) contains many digitizations.
- Harvard's [Geoffery Chaucer Website](https://chaucer.fas.harvard.edu/pages/john-gower-1325-1403).
- The International John Gower Society's [Original Language Editions](https://johngower.org/online-editions/).
- You might check an old cookbook like [The Forme of Cury](https://www.gutenberg.org/cache/epub/8102/pg8102.txt), as edited by Samuel Pegge.

### why?
The Michigan University Middle English Dictionary is pretty much the best resource for looking up Middle English words on the internet, but unfortunately, according to a member of staff, forestalling an open-source MED has been their primary target until now. This way the proprietary data is not expropriated but at the very least, slow website navigation and general lookup UX can be slightly sped up by a simple "double-tap to search" function.

## how does it work?
When you double-click/tap a word in a webpage, your browser highlights that word and temporarily saves it in your browser's local data storage. I can then custom build a link to that word programmatically.


