if (v1 <= v2) {
        return "NO";
    }

    if ((x2 - x1) % (v1 - v2) === 0) {
        return "YES";
    }

    return "NO";
}


// If the behind kangaroo is slower than the front one, no point to check

// They will meet if and only if the kangaroo that starts behind is jumping farther
// each time, and the distance between them decreases in such a way that it becomes
// exactly zero after a whole number of jumps.

// If the distance between the kangaroos is not divisible by the difference in their
// jump lengths, then they will never land on the same position at the same jump, because
// the faster kangaroo will always either fall short or overshoot without matching exactly.

// Meeting depends on two things:
// Relative speed + starting position & Exact divisibility (whole number of jumps)
// Return YES if the kangaroo that starts behind is jumping farther each time and
// the distance between the two kangaroos can be reduced to exactly zero after a
// whole number of jumps; otherwise, return NO.

// Example to understand the logic:
//
// Initial distance between kangaroos: 10
// Distance closed per jump: 2
//
// After each jump:
// 10 -> 8 -> 6 -> 4 -> 2 -> 0  ✅
// They land on the same position exactly.
//
// But if the distance closed per jump is 3:
//
// 10 -> 7 -> 4 -> 1 -> -2  ❌
// They skip zero and never land on the same position.
//
// Kangaroos meet only when the distance between them becomes exactly zero.
// This is why we check whether the initial distance is divisible
// by the difference in their jump lengths.
