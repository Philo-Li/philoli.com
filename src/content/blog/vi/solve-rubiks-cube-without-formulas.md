---
layout: blog
title: "Cách Giải Khối Rubik Mà Không Cần Học Thuộc Công Thức: Ai Cũng Có Thể Hiểu"
date: 2026-05-09 12:00:00
tags:
  - Khối Rubik
  - Hướng dẫn
  - Lý thuyết nhóm
  - Toán học
  - Phương pháp Roux
categories: 日常折腾
description: Dựa trên ý tưởng về hoán vị nhóm và phương pháp Roux Bridge, bài viết này sẽ từng bước hướng dẫn bạn cách giải khối Rubik 3x3 mà không cần ghi nhớ bất kỳ công thức nào.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Khối Rubik đã được giải hoàn chỉnh" />
</figure>

Có lẽ bạn là một người mới chơi Rubik (Rubik's Cube) và chưa bao giờ giải được khối Rubik hoàn chỉnh.

Những hướng dẫn trên thị trường thường chỉ cho bạn một loạt các công thức kỳ lạ, bảo bạn cứ làm thế này, rồi thế kia là khối Rubik sẽ được giải. Nhưng sau khi làm theo, bạn vẫn không hiểu tại sao lại như vậy.

Bài viết này sẽ là cứu tinh của bạn. Bạn sẽ học cách giải khối Rubik từ con số 0, mà không cần học thuộc bất kỳ công thức nào. Bạn sẽ tìm hiểu về nguồn gốc của khối Rubik và cách nó hoạt động. Tôi sẽ dẫn dắt bạn từ lý thuyết đến thực hành, từng bước khôi phục một khối Rubik hoàn chỉnh và chỉ cho bạn cách quan sát.

Có lẽ đây sẽ là lần đầu tiên bạn tự tay giải thành công một khối Rubik hoàn chỉnh.

<!--more-->

## Sự ra đời của Khối Rubik

Tại sao khối Rubik lại có sức hút lớn đến vậy? Trước tiên, chúng ta hãy cùng tìm hiểu về sự ra đời của nó.

Năm 1974, một giáo sư kiến trúc người Hungary tên là Ernő Rubik, đã tạo ra một nguyên mẫu đầu tiên bằng gỗ để minh họa cho sinh viên cách các bộ phận có thể di chuyển độc lập mà không phá vỡ cấu trúc tổng thể. Ông đã sơn sáu mặt với các màu khác nhau, và từ đó, khối Rubik ra đời.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Nguyên mẫu Rubik của Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Chân dung Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Con số tổ hợp đáng kinh ngạc

Một khối Rubik 3x3 có 8 viên góc, 12 viên cạnh và 6 viên tâm, tổng cộng có 26 viên có thể nhìn thấy. Tuy nhiên, thực tế chỉ có 20 viên có thể di chuyển, trừ 6 viên tâm của các mặt.

Vậy tổng số trạng thái của nó là bao nhiêu? **4.3 × 10¹⁹**.

Con số này có nghĩa là gì? Nó còn nhiều hơn số hạt cát trên Trái Đất. Nếu mỗi giây thử 1 tỷ trạng thái, sẽ mất hơn **1300 năm** để duyệt qua hết. Nếu mỗi trạng thái được viết trên một tờ giấy và xếp chồng lên nhau, độ dày sẽ tương đương với việc đi từ Trái Đất đến Mặt Trời và quay về 14000 lần.

Khối Rubik 3x3 nhỏ bé này thực sự không thể đánh giá qua vẻ ngoài. Cũng bởi lối chơi mới lạ, thú vị, biến hóa khôn lường và sức hút vô tận, khối Rubik đã ngay lập tức bùng nổ thị trường khi ra mắt, thu hút đông đảo người chơi và những người đam mê tham gia. Ngay sau đó, các cuộc thi Rubik ra đời với nhiều hình thức chơi khác nhau (giải nhanh Speedsolving, giải bịt mắt Blindfolded, giải một tay One-Handed, giải bằng chân With Feet), các phương pháp giải đa dạng (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), và thậm chí cả các loại Rubik biến thể (từ 2x2 đến 7x7, Kim tự tháp Pyraminx, Skewb, Megaminx) cũng xuất hiện không ngừng.

![Các biến thể Rubik dị hình](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Sức hút của khối Rubik lớn đến mức các nhà toán học không ngừng nghiên cứu toán học trong nó, dành hàng thập kỷ để tìm kiếm "số của Chúa", các phi hành gia mang nó lên không gian để chơi, và mọi lứa tuổi đều tỏa sáng trong các cuộc thi khác nhau. Tuy nhiên, so với sức hấp dẫn của khối Rubik, số lượng người chơi vẫn còn tương đối ít. Vì vậy, tôi muốn thông qua bài viết này để hướng dẫn mọi người cách giải Rubik, tận hưởng niềm vui mà trò chơi trí tuệ này mang lại.

## Cái bẫy của các công thức

Hầu hết các phương pháp giải Rubik trên thị trường đều yêu cầu người chơi phải ghi nhớ rất nhiều công thức, điều này rất dễ khiến người mới nản lòng. Họ chưa kịp cảm nhận niềm vui khi giải được khối Rubik đã bị các công thức cản trở. Phương pháp CFOP nổi tiếng có hơn 100 công thức, và người mới cũng phải học thuộc hàng chục công thức.

Vì vậy, hôm nay tôi muốn chia sẻ với các bạn một phương pháp chơi Rubik vui vẻ mà không cần học thuộc công thức. Giúp bạn có thể khôi phục khối Rubik chỉ bằng cách quan sát và thấu hiểu.

## Vũ khí toán học tối thượng: Lý thuyết nhóm (Group Theory)

Hỏi: Làm thế nào để giải khối Rubik mà không cần ghi nhớ bất kỳ công thức nào?

Ở đây, chúng ta sẽ triệu hồi vũ khí toán học tối thượng: Lý thuyết nhóm. Không có vấn đề gì mà toán học không thể giải quyết.

Vậy khối Rubik và Lý thuyết nhóm có mối liên hệ gì? Khối Rubik thực chất là một nhóm. Trong khối Rubik, mỗi lần xoay là một phép hoán vị. Thao tác này có một số đặc tính: nó có thể kết hợp, có thể đảo ngược, nhưng không thể giao hoán.

Phép nhân mà chúng ta đã học ở tiểu học là một phép toán có tính giao hoán, kết quả của A × B và B × A là như nhau. Nhưng trong nhóm Rubik, việc hoán đổi A và B không tương đương. Thực hiện R trước rồi U sau và U trước rồi R sau là hai thao tác hoàn toàn khác biệt. Vì vậy, khi chúng ta hiểu về nhóm, chúng ta sẽ hiểu về khối Rubik. Và việc chơi Rubik cũng giúp chúng ta hiểu hơn về nhóm.

Chúc mừng bạn, bạn đã phân biệt được giữa nhóm Abel (phép nhân và phép cộng đều là nhóm Abel) và nhóm không Abel (nhóm Rubik).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U và U R theo thứ tự khác nhau sẽ có hiệu quả khác nhau - Phần một" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U và U R theo thứ tự khác nhau sẽ có hiệu quả khác nhau - Phần hai" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Bổ sung: Các thao tác tiêu chuẩn của Rubik thường được thay thế bằng các chữ cái. R đại diện cho việc xoay mặt phải theo chiều kim đồng hồ 90 độ, U đại diện cho việc xoay mặt trên theo chiều kim đồng hồ 90 độ. R' là xoay ngược chiều kim đồng hồ 90 độ. M' là xoay lớp giữa lên trên, M là xoay lớp giữa xuống dưới).

Bạn có thể trực tiếp quan sát và học cách xoay khối Rubik trong phần hoạt ảnh Rubik trực tuyến ở phụ lục.

## Phần Nguyên lý: Cốt lõi để không cần công thức: Hoán vị (Commutator)

Để giải khối Rubik, chúng ta cần đạt được trạng thái sau: **điều chỉnh vị trí của một số viên cụ thể mà không làm thay đổi vị trí của các viên khác.**

Trong toán học, thao tác này được gọi là hoán vị (Commutator), được viết là **A B A⁻¹ B⁻¹**.

A⁻¹ là thao tác ngược của A.

Chúng ta có thể dùng một ví dụ rất đời thường — thang máy. Giả sử bạn muốn đưa một người từ tầng 1 lên tầng 3:

1. **A**: Người bước vào thang máy
2. **B**: Thang máy lên tầng 3
3. **A⁻¹**: Người bước ra khỏi thang máy
4. **B⁻¹**: Thang máy trở về tầng 1

Kết quả: Thang máy trở về vị trí ban đầu, nhưng người đã di chuyển từ tầng 1 lên tầng 3. Điểm mấu chốt là: khi thang máy quay lại, người đó đã không còn ở trong đó nữa — vì vậy, môi trường được khôi phục, nhưng đối tượng đã thay đổi vị trí.

Ví dụ trong khối Rubik, R và R⁻¹ tương ứng với việc xoay mặt phải theo chiều kim đồng hồ 90 độ, và ở bước thứ ba lại xoay ngược chiều kim đồng hồ 90 độ.

Thao tác ngược A⁻¹ B⁻¹ này có thể khôi phục môi trường đã bị xáo trộn bởi thao tác A B trước đó, từ đó giúp chúng ta chỉ hoán đổi một số viên cụ thể mà không ảnh hưởng đến môi trường xung quanh.

Vậy tại sao không phải là A A⁻¹ B B⁻¹? Vì như vậy, mỗi thao tác sẽ trực tiếp triệt tiêu nhau, các viên sẽ không thể hoán đổi. Vừa thực hiện thao tác A, rồi ngay sau đó là thao tác ngược A⁻¹, tổng hợp lại coi như chưa làm gì (ví dụ: xoay mặt trên ngược chiều kim đồng hồ 90 độ, rồi ngay sau đó xoay thuận chiều kim đồng hồ 90 độ). Vì vậy, phải là **A B A⁻¹ B⁻¹** mới tạo ra sự hoán đổi.

Đây là phép hoán đổi cơ bản nhất, thao tác nguyên tử thuận tay nhất trong khối Rubik tương ứng là: **R U R' U'**

![Demo R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Nó có thể được kết hợp thành chuỗi dài và tạo ra các hiệu ứng hoán vị khác nhau, ví dụ như chuỗi này: (R U R' U') (R U R' U') (R U R')

Thực ra, đây cũng chính là nguồn gốc của các công thức. Tại sao lại có công thức? Đó là việc kết hợp một loạt các thao tác hoán vị cơ bản nhất, tạo thành các chuỗi. Thực hiện theo chuỗi này có thể nhanh chóng đạt được kết quả cụ thể, ví dụ như khôi phục một viên cạnh, khôi phục một viên góc. Các chuỗi khác nhau có thể được kết hợp để dẫn chúng ta đến việc giải hoàn chỉnh khối Rubik.

Sau khi hiểu nguyên lý, chúng ta thậm chí có thể tự tạo ra các công thức riêng cho mình. (Cách tự tạo công thức Rubik sẽ được phân tích chi tiết trong bài viết tiếp theo).

Vì vậy, để giải khối Rubik mà không cần ghi nhớ bất kỳ công thức nào, chúng ta chỉ cần nắm vững tư duy hoán vị cơ bản là đủ, và có thể áp dụng linh hoạt trong mọi trường hợp. Các thao tác hoán vị cơ bản nhất sẽ hoán đổi vị trí của ba viên góc, hoặc hoán đổi vị trí của ba viên cạnh.

## Cách thực hiện hoán đổi trong Khối Rubik

Như đã đề cập trước đó, thao tác hoán đổi cơ bản thuận tay nhất trong khối Rubik là: **R U R' U'**. Nếu bạn hiểu sâu sắc thao tác này, bạn sẽ có thể giải ngay hai tầng đầu tiên của khối Rubik.

Thao tác này thực chất có nghĩa là: di chuyển ra (lớp bên phải), chèn (viên mục tiêu), đưa về vị trí cũ (lớp bên phải), đưa về vị trí cũ (lớp trên cùng).

Như vậy, chúng ta đã thực hiện việc chèn viên góc trước bên trái và viên cạnh giữa vào góc dưới bên phải.

Thao tác này có thể thay đổi liên tục, trở thành **U R U' R'**, hoặc **F R F' R'**, v.v., ở bất kỳ vị trí nào, thậm chí còn có lớp giữa **M U M' U'**, hoặc **U2 R U2 R'**.

![Demo thao tác hoán vị cơ bản](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ở giai đoạn đầu, khối Rubik ở mức độ hỗn loạn cao nhất, vì vậy có thể sử dụng nhiều phép hoán vị cơ bản như trên để khôi phục một mặt, hoặc một phần nào đó, nhằm giảm bớt mức độ hỗn loạn.

Hơn nữa, vì trạng thái rất hỗn loạn, thao tác U' cuối cùng trong **R U R' U'** để khôi phục môi trường thậm chí có thể được bỏ qua tùy theo tình huống, và chuyển thẳng sang thao tác tiếp theo. Điều này đơn giản hóa thành: di chuyển ra, chèn, đưa về vị trí cũ.

Di chuyển ra, chèn, đưa về vị trí cũ.

Đây chính là thao tác cốt lõi, chúc mừng bạn, bạn đã hiểu cách chơi Rubik rồi!

Tuy nhiên, đến giai đoạn sau, chúng ta sẽ cần các bước hoán vị dài hơn để hoán đổi các viên cụ thể mà không phá vỡ hoàn toàn trạng thái đã được khôi phục.

Lấy **R U' L' U R' U' L U** làm ví dụ, thao tác này chỉ hoán đổi ba viên góc mà không ảnh hưởng đến các viên khác. Phân tích theo logic hoán vị:

```
A   = R U'   （đưa viên góc ra ngoài）
B   = L'     （xoay lớp trái một chút）
A⁻¹ = U R'   （khôi phục thao tác A）
B⁻¹ = U' L U（khôi phục thao tác B, có điều chỉnh）
```

Hiệu quả: Viên góc dưới bên trái giữ nguyên vị trí, ba viên góc còn lại hoán đổi.

Đây có lẽ là hai công thức duy nhất bạn cần biết trong bài viết này. Chúng ta sẽ học cách sử dụng chúng trong phần thực hành và nắm bắt thông qua thao tác, chứ không cần học thuộc lòng.

## Phần Thực hành: Bắt đầu khôi phục từ số 0

Cuối cùng, chúng ta đã đến phần quan trọng nhất của bài viết. Tôi sẽ dẫn dắt bạn từng bước, chỉ bằng cách quan sát và thấu hiểu, để giải hoàn chỉnh khối Rubik từ con số 0.

Những thứ cần chuẩn bị:

- Một khối Rubik
- Và một chút kiên nhẫn (vì chúng ta chủ yếu tập trung vào quan sát và thấu hiểu)

Đầu tiên, giả sử bạn đã có một khối Rubik trong tay. Chúng ta sẽ xáo trộn khối Rubik theo tiêu chuẩn quốc tế (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), sau đó tôi sẽ cùng bạn giải khối Rubik này.

Hoặc bạn có thể chơi phiên bản trực tuyến tại đây. Nhấp vào liên kết này, bạn sẽ thấy một khối Rubik đã được xáo trộn sẵn: [3D Khối Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Trạng thái ban đầu của khối Rubik đã xáo trộn](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Chúng ta có thể giải khối Rubik bằng cách tận dụng ý tưởng của phương pháp Roux Bridge rất thanh lịch. Phương pháp Bridge này, khác với việc giải từng tầng, là khôi phục trước hai khối 1x2x3 ở hai bên (thường gọi là cầu trái và cầu phải), sau đó mới khôi phục mặt trên và các vị trí còn lại.

Phương pháp Bridge rất tự do và linh hoạt, số bước ít hơn nhiều phương pháp nổi tiếng khác, và số công thức cần ghi nhớ cũng tương đối ít, vì về cơ bản nó dựa trên logic hoán vị. Trong khuôn khổ này, chúng ta có thể học cách giải khối Rubik mà không cần học thuộc bất kỳ công thức nào.

![Sơ đồ quy trình phương pháp Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Bước Một: Cố định vị trí quan sát

Vị trí quan sát của phương pháp Bridge là cố định. Trong quá trình giải, chúng ta không cần xoay khối Rubik thường xuyên, mà duy trì một góc nhìn để suy nghĩ và giải. Với mặt cố định này, chúng ta có thể dễ dàng nhìn thấy các viên góc và viên cạnh, biết chúng nên đi về đâu.

Chúng ta có thể lấy góc này làm chuẩn:

- Phía trước (hướng về bạn): Mặt màu xanh lá
- Bên trái: Màu đỏ
- Bên phải: Màu cam
- Mặt trên: Màu vàng
- Mặt dưới: Màu trắng
- Mặt sau: Màu xanh dương

### Bước Hai: Xây dựng cầu trái và cầu phải

**Thứ tự xây dựng cầu trái:**

1. Đầu tiên, đưa viên cạnh trắng-đỏ về đúng vị trí (trụ cột dưới bên trái)
2. Sau đó, đưa viên cạnh xanh dương-đỏ phía sau về đúng vị trí
3. Tiếp theo, đưa hai viên góc màu đỏ phía trước về đúng vị trí

Sơ đồ trạng thái cầu trái hoàn thành:

![Trạng thái cầu trái hoàn thành](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Quá trình này không cần bất kỳ công thức nào, chỉ cần quan sát và hiểu là được. Luyện tập nhiều sẽ thành thạo hơn.

**F' L**: Sử dụng phương pháp quan sát, tìm viên cạnh đỏ-trắng, đưa nó về vị trí, sao cho mặt trắng hướng xuống, mặt đỏ hướng sang trái.

![Demo đưa viên cạnh trắng-đỏ về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Đưa viên cạnh xanh dương-đỏ và viên góc về đúng vị trí.

![Đưa viên cạnh xanh dương-đỏ và viên góc về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Tìm vị trí của hai viên cuối cùng của cầu trái, tìm cách đưa chúng về vị trí, và chúng ta sẽ có một cầu trái hoàn hảo.

![Đưa hai viên cuối cùng của cầu trái về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Cầu phải tương tự**, thay màu đỏ bằng màu cam, lặp lại các bước trên. Tuy nhiên, ở đây cần lưu ý không làm xáo trộn cầu trái đã hoàn thành. Nếu cần mượn vị trí, có thể tạm thời di chuyển cầu trái ra một vị trí khác để các thao tác bên phải không ảnh hưởng đến cầu trái, sau khi thao tác bên phải kết thúc thì khôi phục lại cầu trái.

**Giữa cầu phải**: U' M U' R2

![Đưa viên cạnh giữa cầu phải về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Viên đầu tiên của cầu phải**: U' M' U2 R' U R

![Đưa viên đầu tiên của cầu phải về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Chúng ta đã hoàn thành module cuối cùng của cầu phải, muốn chèn vào vị trí, vì vậy hãy di chuyển cầu trái ra (F') để tạo không gian, sau đó di chuyển module (U), cuối cùng đưa cầu trái và cầu phải về vị trí cùng lúc.

![Chèn viên cuối cùng của cầu phải](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Đây là trạng thái khi cả cầu trái và cầu phải đều đã hoàn thành. Chỉ cần các cầu được hình thành là đủ, các viên màu khác tạm thời không cần quan tâm.

![Trạng thái cầu trái và phải hoàn thành](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Bước Ba: Khôi phục các viên góc mặt trên

Khi bạn đã khôi phục xong hai cầu trái và phải, tiếp theo chúng ta sẽ bắt đầu khôi phục bốn viên góc còn lại. Ở đây, chúng ta sẽ cần sử dụng phép hoán đổi ba viên góc, khiến ba viên góc luân phiên vị trí, từ A đến B, B đến C, và C trở lại A.

![Sơ đồ hoán đổi ba viên góc: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Hoán đổi ba viên góc

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Công thức 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Viên góc dưới bên trái giữ nguyên vị trí</li>
      <li>Ba viên góc còn lại hoán đổi vị trí **ngược chiều kim đồng hồ**</li>
      <li>Nhưng màu sắc bên trong của chúng sẽ xoay **thuận chiều kim đồng hồ**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Công thức 2 (phiên bản đối xứng)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Viên góc dưới bên phải giữ nguyên vị trí</li>
      <li>Ba viên góc còn lại hoán đổi vị trí **thuận chiều kim đồng hồ**</li>
      <li>Nhưng màu sắc bên trong của chúng sẽ xoay **ngược chiều kim đồng hồ**</li>
    </ul>
  </div>
</div>

![Demo hoán đổi ba viên góc phiên bản đối xứng](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Có bốn trường hợp về hướng của các viên góc mà bạn có thể gặp: 0, 1, 2, hoặc 4 viên góc đúng hướng.

- **4 viên góc đúng hướng**: Trạng thái hoàn thành
- **1 viên góc đúng hướng** (dạng cá nhỏ): Chỉ cần thực hiện thêm một lần hoán đổi ba viên hoặc phiên bản đối xứng là hoàn thành.
- **0 / 2 viên góc đúng hướng**: Đầu tiên, đặt một viên góc sai hướng vào vị trí không bị ảnh hưởng bởi phép hoán đổi ba viên (góc dưới bên trái), thực hiện một lần hoán đổi ba viên, nó sẽ trở thành 1 viên góc đúng hướng, quay lại trường hợp trên.

Đôi khi phiên bản cơ bản của phép hoán đổi ba viên cần thực hiện hai lần mới có thể khôi phục, trong khi phiên bản đối xứng chỉ cần một lần là hoàn thành. Người mới chỉ cần nắm vững phiên bản cơ bản, tập trung vào quan sát và hiểu, sau đó sẽ có thể thông suốt. Phép hoán đổi ba viên với mặt màu vàng hướng lên này cũng là một công thức kinh điển nổi tiếng – công thức cá nhỏ trái phải, bạn có thể nắm bắt hình dạng của con cá nhỏ.

Công thức này cũng không cần học thuộc lòng. Bạn hãy quan sát cách hai viên màu xanh lá cây di chuyển, tự tay thực hiện vài lần là sẽ quen. Cốt lõi là hoán đổi ba viên góc của mặt trên.

Với khối Rubik vừa hoàn thành cầu trái và phải, chúng ta thấy có hai mặt màu vàng ở phía trên. Vì vậy, chúng ta sẽ chuyển viên góc dưới bên trái thành viên không phải màu vàng, và thực hiện một lần thao tác hoán đổi ba viên góc. Sau đó, thực hiện thêm 2 lần hoán đổi ba viên góc, hoặc một lần hoán đổi ba viên góc phiên bản đối xứng, là có thể làm cho bốn viên góc trên cùng đều có màu vàng hướng lên.

![Demo quá trình hoán đổi ba viên góc](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Đã hoàn thành bốn viên góc màu vàng!

![Trạng thái bốn viên góc màu vàng hoàn thành](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Điều chỉnh vị trí (để các màu cạnh bên khớp nhau)

Khi bốn viên góc đều có màu vàng hướng lên, chúng ta cần phải làm cho các màu cạnh bên của viên góc khớp nhau, như vậy viên góc mới hoàn toàn về đúng vị trí.

Lúc này, hãy dùng **biến thể J-perm**: **R U2 R' U' R U2 L' U R' U' L**

Logic của công thức này có thể được phân tích thành "di chuyển cặp + hoán đổi logic":

- Nửa đầu `R U2 R' U' R`: Đưa một cặp viên vào vùng an toàn để tạm cất, tạo không gian.
- Nửa sau `U2 L' U R' U' L`: Sử dụng logic hoán đổi ba viên, hoàn thành chính xác việc đổi chỗ hai viên góc.

**Hiệu quả**: Hai viên góc bên phải hoán đổi vị trí, đồng thời giữ màu vàng hướng lên, các viên góc khác không đổi.

Điều này tương đương với việc có thể hoán đổi vị trí của bất kỳ hai viên góc liền kề nào (sử dụng U để điều chỉnh hai viên góc nào nằm ở bên phải). Thực hiện hoán đổi vài lần, bốn viên góc sẽ hoàn toàn khớp và về đúng vị trí.

![Demo J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Công thức này cũng không cần học thuộc lòng. Bạn hãy quan sát cách hai viên màu xanh lá cây di chuyển, tự tay thực hiện vài lần là sẽ quen. Cốt lõi là hoán đổi hai viên góc bên phải của mặt trên, trong khi vẫn giữ màu vàng hướng lên.

### Bước Bốn: Khôi phục sáu viên cạnh cuối cùng (LSE, Last Six Edges)

Đến đây, trước tiên hãy căn chỉnh các viên tâm, sao cho màu vàng ở trên, màu trắng ở dưới, sau đó điều chỉnh các viên cạnh.

Chỉ còn lại 6 viên cạnh. Bước này chỉ sử dụng hai thao tác **M** và **U**, rất trực quan.

#### 4a: Điều chỉnh hướng (EO, Edge Orientation)

**Cách xác định**: Xem miếng dán màu trắng / vàng của viên cạnh có hướng lên hoặc xuống hay không.

- Hướng lên / Hướng xuống = Viên cạnh tốt ✓
- Hướng sang bên = Viên cạnh xấu ✗

**Cách điều chỉnh**: Sử dụng **M U M'** hoặc **M' U M** để lật viên cạnh xấu.

![Demo M U M' lật viên cạnh xấu](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Hiểu một cách trực quan: M lật viên cạnh ở lớp giữa lên, U điều chỉnh vị trí, M' lật trở lại.

Lặp lại vài lần cho đến khi tất cả các viên cạnh đều có màu trắng / vàng hướng lên hoặc xuống.

Chúng ta có thể gọi các viên cạnh có hướng đúng là viên cạnh tốt, và các viên cạnh có hướng sai là viên cạnh xấu.

Như hình minh họa, ba viên cạnh được tô sáng ở mặt trên là các viên cạnh xấu, vì chúng không phải màu vàng cũng không phải màu trắng.

![Sơ đồ tô sáng các viên cạnh xấu](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Mẹo điều chỉnh**: Có bốn trường hợp về các viên cạnh xấu mà bạn có thể gặp:

- **0 viên cạnh xấu**: Trạng thái hoàn thành
- **Không phải 0 cũng không phải 4 viên cạnh xấu**: Dùng **M' U M** để thay đổi số lượng viên cạnh xấu, tăng lên thành 4 viên cạnh xấu.
- **4 viên cạnh xấu (2 viên trên, 2 viên dưới)**: Dùng **M' U2 M** để hoán đổi các viên cạnh trên và dưới, tạo thành tình huống 3 viên trên, 1 viên dưới.
- **4 viên cạnh xấu (3 viên trên, 1 viên dưới)**: Ba viên cạnh xấu ở mặt trên sẽ tạo thành một hình mũi tên. Xoay mặt trên để mũi tên chỉ vào viên cạnh xấu ở mặt dưới, thực hiện một lần **M' U M**, bốn viên cạnh xấu sẽ triệt tiêu lẫn nhau, tất cả đều trở thành viên cạnh tốt.

![Demo loại bỏ mũi tên bốn viên cạnh xấu](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Nếu không xuất hiện mũi tên, hãy lặp lại thao tác **M' U M**, chắc chắn sẽ ghép được. Sau khi thành thạo, bạn có thể dần dần tìm ra quy luật.

#### 4b: Khôi phục các viên cạnh hai bên (màu đỏ và màu cam)

Tìm viên cạnh đỏ-vàng và cam-vàng (mục tiêu là đưa chúng về các viên cạnh ở hai bên), sử dụng phép hoán đổi ba viên cạnh để đưa chúng về đúng vị trí.

**Mẹo**:

1. Đưa viên cạnh đỏ-vàng (hoặc cam-vàng) lên phía trên lớp giữa, dùng cách hoán đổi các viên cạnh trên và dưới để đưa nó xuống đáy (**M' U2 M**).
2. Đưa viên cạnh cam-vàng (hoặc đỏ-vàng) còn lại xuống đáy ở phía đối diện.
3. Xoay mặt trên để cạnh màu đỏ xuất hiện ở vị trí đối diện với viên cạnh đỏ-vàng đã xuống đáy.
4. Xoay lớp giữa nửa vòng **M2**, quan sát mặt trên và đưa về vị trí **U**.

![Demo đưa các viên cạnh hai bên về vị trí](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Giải quyết bốn viên cạnh cuối cùng (màu xanh dương và xanh lá cây)

**Mẹo**:

- Liên tục sử dụng **hoán đổi ba viên cạnh** để hoán đổi các viên cạnh trên và dưới: **M' U2 M**, bước cuối cùng dựa vào quan sát để đưa về vị trí **U2**.
- Mẹo nhanh: Đặt viên cạnh trắng-xanh lá (hoặc trắng-xanh dương) ở phía trên vị trí mục tiêu, hoán đổi các viên cạnh trên và dưới, viên cạnh trắng-xanh lá (trắng-xanh dương) sẽ về đúng vị trí.

Chỉ có ba trường hợp:

- Đã đúng → Hoàn thành!
- Cần M2 → Thực hiện một lần **M2**.
- Cần hoán đổi → **M' U2 M U2** hoặc **M U2 M' U2**.

Chúng ta cũng có thể đơn giản hóa logic của phép hoán đổi ba viên cạnh: M' là lớp giữa đi lên, U2 là mặt trên xoay nửa vòng, M là lớp giữa trở lại, U2 là mặt trên trở lại.

![Demo hoán đổi ba viên cạnh](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Hoàn thành!

![Khối Rubik đã được giải hoàn chỉnh](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Tóm tắt

Không cần học thuộc công thức, chỉ cần logic hoán vị "mở cửa—thao tác—đóng cửa". Bạn sẽ thấy quá trình này thú vị hơn nhiều so với việc học thuộc lòng công thức, và dù bao nhiêu năm trôi qua cũng không lo quên, bạn có thể tự mình suy luận ra bất cứ lúc nào.

Tư duy tương tự có thể áp dụng để giải bất kỳ khối Rubik nào, bao gồm cả các loại Rubik biến thể kỳ lạ.

Tuy nhiên, nếu bạn muốn theo con đường thi đấu tốc độ, bạn sẽ phải dấn thân vào con đường luyện tập không ngừng nghỉ. Nhưng đối với người mới bắt đầu, chỉ cần một chút luyện tập là có thể đạt được dưới 90 giây mà không gặp vấn đề gì.

Có hàng ngàn cách giải, xem bạn có thể tìm thấy phương pháp nào thanh lịch hoặc thuận tay hơn không.

Thế giới Rubik đầy niềm vui bất tận, chúc bạn chơi thật vui vẻ.

## Phụ lục 1: Tóm tắt phương pháp giải Rubik trong bài viết này (Kinh nghiệm giải Rubik)

1.  **Xây dựng cầu trái và phải: Dựa vào quan sát và trực giác**
    -   Mẹo: Khi bạn đã thành thạo việc quan sát và dự đoán, bạn có thể ưu tiên xây dựng các module khác hoặc đồng thời xây dựng cả cầu trái và phải tùy thuộc vào trạng thái cụ thể của khối Rubik. Điều này giúp giảm số bước và mang lại sự tự do rất lớn.
2.  **Khôi phục hướng của bốn viên góc mặt trên: Bốn mặt vàng hướng lên**
    -   Hoán đổi ba viên góc mặt trên: **R U' L' U R' U' L U** (giữ viên góc dưới bên trái không đổi vị trí, các màu sắc bên trong của ba viên góc còn lại xoay thuận chiều kim đồng hồ)
    -   Hoán đổi ba viên góc mặt trên phiên bản đối xứng: **L' U R U' L U R' U'** (giữ viên góc dưới bên phải không đổi vị trí, các màu sắc bên trong của ba viên góc còn lại xoay ngược chiều kim đồng hồ)
3.  **Khôi phục các mặt bên của bốn viên góc mặt trên**
    -   **Điều chỉnh vị trí viên góc mặt trên**: **R U2 R' U' R U2 L' U R' U' L** (giữ cho bốn viên góc đều có màu vàng hướng lên, hoán đổi vị trí hai viên góc bên phải)
4.  **Thay đổi hướng viên cạnh, để màu trắng hoặc vàng hướng lên hoặc xuống**
    -   Trước tiên, căn chỉnh các viên tâm, để màu vàng ở trên, màu trắng ở dưới, sau đó điều chỉnh các viên cạnh.
    -   Dùng **M' U M** để thay đổi số lượng viên cạnh xấu, tạo hình mũi tên, hướng mũi tên vào viên cạnh xấu, thực hiện một lần **M' U M**, bốn viên cạnh xấu sẽ triệt tiêu và về đúng vị trí.
5.  **Khôi phục các viên cạnh hai bên** (màu đỏ và màu cam)
    -   Trước tiên, đưa viên cạnh đỏ-vàng (hoặc cam-vàng) xuống đáy bằng cách hoán đổi các viên cạnh trên và dưới (**M' U2 M**).
6.  **Khôi phục các viên cạnh còn lại** (màu xanh dương và xanh lá cây)
    -   Liên tục dùng **hoán đổi ba viên cạnh** để hoán đổi các viên cạnh trên và dưới: **M' U2 M**, bước cuối cùng dựa vào quan sát để đưa về vị trí **U2**.

Không cần phải học thuộc lòng bất kỳ công thức nào ở trên đâu, chúng chỉ được thêm vào phụ lục để bạn tiện tham khảo. Thực ra, khi bạn tự mình thử, vừa quan sát vừa hiểu cách các khối tương ứng di chuyển, chỉ cần làm vài lần là sẽ quen ngay thôi. Mấu chốt là hoán đổi ba khối góc ở tầng trên cùng.

## Phụ lục 2: Các trang web và công cụ hữu ích

Tôi cũng đã tạo ra một khối Rubik 3D trực tuyến để các bạn có thể chơi, xoay tùy ý, hoặc xáo trộn và giải theo các công thức cố định, mỗi bước đều có hoạt ảnh đẹp mắt để xem!

[3D Khối Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Công cụ Rubik 3D trực tuyến](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Công thức xáo trộn giống như trong hướng dẫn này: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Các bước giải cầu trái phải trong hướng dẫn này: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Nhấp vào liên kết này, bạn sẽ thấy một khối Rubik đã được xáo trộn sẵn: [3D Khối Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Bộ bấm giờ Rubik mà các nhà vô địch thế giới đều sử dụng: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
