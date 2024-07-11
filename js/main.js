// {
//     // Masalada berilgan sozlarni katta harfga o;zgartir
//     function makeUpperCase(str){
//         return str.toUpperCase()
//     }
//     console.log(makeUpperCase("Salom"));
//     console.log(makeUpperCase("Hello"));
//     console.log(makeUpperCase("HELLO"));

// }

{
    // shunday sozlar keladi bundafaqat bosh harflarini qaytarish kere va ajratish uchun nuqtadan foydalan
    function toInitials(name) {
        let sum = name.split(" ") // bunda split bizga erry qilib qaytaririb beradi
        let qiymat = name[0][0].toUpperCase() + `.` + sum[1][0].toUpperCase() // yani budan yangi ozaruvchu ochib har birini 0 indexsini oldik olingan indexga nuqta qoshib hamma harflarni bosh harifga qaytardik
        return qiymat
    }

    console.log(toInitials("john doe"));    // Output: "J.D"
    console.log(toInitials("Jane Smith"));  // Output: "J.S"
    console.log(toInitials("peter parker"));// Output: "P.P"

}

{
    // bunda agar son juft bolsa 8 ga oshir toq bolsa 9 ga oshir
    function simpleMultiplication(number) {
        if (number % 2 === 0) {
            return number * 8
        } else {
            return number * 9
        }
    }
    console.log(simpleMultiplication(5));
    console.log(simpleMultiplication(4));
    console.log(simpleMultiplication(4));
    console.log(simpleMultiplication(2));
    // Agarda osonroq yoli shu
    function name(params) {
        return params % 2 === 0 ? params * 8 : params * 9;
    }
    console.log(name(1));

}

{
    // agra sozda r harho bolsa plas panjo akis holda esa does not banjo qilib qaytarsin
    function areYouPlayingBanjo(name) {
        if (name[0].toLowerCase() === `r`) {
            return `${name} plays banjo`
        } else {
            return `${name} does not play banjo`
        }

    }
    console.log(areYouPlayingBanjo("salom"));
    console.log(areYouPlayingBanjo("Rano"));

}
{

    function areYouPlayingBanjo(name) {
        return name[0].toLowerCase() === `r`
    }
    console.log(areYouPlayingBanjo("salom"));
    console.log(areYouPlayingBanjo("Rano"));
}

{
    function findNeedle(haystack) {
        // your code here
        let position = haystack.indexOf("needle")
        return ` found the needle at position ${position}`
    }
    console.log(findNeedle(["hay", "junk", "hay", "needle", "more junk"])); // Output: "found the needle at position 3"
    console.log(findNeedle(["needle", "hay", "junk", "hay"])); // Output: "found the needle at position 0"
    console.log(findNeedle(["hay", "hay", "hay", "needle", "hay"]));
}

{
    function invertNumbers(numbers) {
        return numbers.map(numbers => -numbers);
    }
    console.log(invertNumbers([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]
    console.log(invertNumbers([0, -1, 2, -3, 4])); // Output: [0, 1, -2, 3, -4]
    console.log(invertNumbers([-1, -2, -3, -4, -5])); // Output: [1, 2, 3, 4, 5]
    
}
{
    function smash(words){
        return words.join(" ")
    }
    console.log(smash(["hello", "world"]));  
}