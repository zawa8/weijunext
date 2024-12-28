import {
  hin115_font, eng115_font, ing115_font, bangla115_font, telugu115_font,
  mlyalm115_font, tmil115_font, kannada115_font, odia115_font,
  sinhala115_font, pnzabi115_font, guzrati115_font, binaryvertical115_font
} from '@/fonts';

const FontPicker: React.FC = () => {
const handlevaluechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  document.body.className = '';  
  const v_to_f = (sval: string): string => {
    switch (sval) {
      case 'i': return ing115_font.className;
      case 'e': return eng115_font.className;
      case '1': return hin115_font.className;
      case '2': return bangla115_font.className;
      case '3': return telugu115_font.className;
      case '4': return mlyalm115_font.className;
      case '5': return tmil115_font.className;      
      case '6': return kannada115_font.className;
      case '7': return odia115_font.className;
      case '8': return sinhala115_font.className;
      case '9': return pnzabi115_font.className;
      case 'L': return guzrati115_font.className;
      case 'J': return binaryvertical115_font.className;
      default: return ing115_font.className;
    }
  }
  const sf = v_to_f(e.target.value);
  document.body.classList.add(sf);  
  document.body.classList.add("antialiased");  
};
return (
  <select onChange={handlevaluechange} className="select text-zinc-50 italic font-bold bg-black mx-4 w-1/4">
    <option value="i">iNg31:a-z+ADHTN</option>
    <option value="e">Eng52:a-zA-Z</option>
    <option value="1">Hin115_font</option>
    <option value="2">baNgla115_font</option>
    <option value="3">Telugu115_font</option>
    <option value="4">mAlAyalAm115_font</option>
    <option value="5">TAmil115_font</option>
    <option value="6">kAnnadA115_font</option>
    <option value="7">odia115_font</option>
    <option value="8">sinhala115_font</option>
    <option value="9">pnzabi115_font</option>
    <option value="L">guzraTi115_font</option>
    <option value="J">binaryvertical115_font</option>
  </select>
);
};

export default FontPicker;
