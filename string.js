// String Methods

// charAt(x)
// charCodeAt(x)
// concat(v1,v2..)
// fromCharcode(c1,c2)
// indexOf(substr, [start])
// lastIndexOf(substr, [start])
// match(regexp)
// replace(regexp/substr, replacetext)
// search(regexp)
// slice(start, [end])
// split(delimiter, [limit])
// substr(start, [length])
// substring(from, [to])
// toLowerCase()
// toUpperCase()
// includes()
// endsWith()
// repeat()
// valueOf()
// trim()

// String.prototype[@@iterator]()
// String.prototype.anchor()
// Deprecated
// String.prototype.at()
// String.prototype.big()
// Deprecated
// String.prototype.blink()
// Deprecated
// String.prototype.bold()
// Deprecated
// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.codePointAt()
// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.fixed()
// Deprecated
// String.prototype.fontcolor()
// Deprecated
// String.prototype.fontsize()
// Deprecated
// String.fromCharCode()
// String.fromCodePoint()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.isWellFormed()
// String.prototype.italics()
// Deprecated
// String.prototype.lastIndexOf()
// String.prototype.link()
// Deprecated
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()
// String.prototype.normalize()
// String.prototype.padEnd()
// String.prototype.padStart()
// String.raw()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.small()
// Deprecated
// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.strike()
// Deprecated
// String.prototype.sub()
// Deprecated
// String.prototype.substr()
// Deprecated
// String.prototype.substring()
// String.prototype.sup()
// Deprecated
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.toWellFormed()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()

let ok = "    hello world ww    ";
console.log(ok);
console.log(ok.trim());

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex1 = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
